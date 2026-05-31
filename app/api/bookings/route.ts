import { NextResponse } from "next/server";
import { getPool } from "@/lib/postgres";

export const runtime = "nodejs";

const allowedServices = new Set(["轻柔净洗", "全套洗护", "修剪造型", "猫咪护理"]);

type BookingPayload = {
  name?: unknown;
  phone?: unknown;
  service?: unknown;
};

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: BookingPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "预约信息格式不正确。" }, { status: 400 });
  }

  const customerName = cleanText(payload.name);
  const phone = cleanText(payload.phone);
  const service = cleanText(payload.service);

  if (!customerName || !phone || !service) {
    return NextResponse.json({ message: "请填写称呼、联系电话和服务项目。" }, { status: 400 });
  }

  if (!allowedServices.has(service)) {
    return NextResponse.json({ message: "请选择有效的服务项目。" }, { status: 400 });
  }

  try {
    const result = await getPool().query(
      `insert into public.appointments (customer_name, phone, service)
       values ($1, $2, $3)
       returning id, customer_name, phone, service, status, created_at`,
      [customerName, phone, service],
    );

    return NextResponse.json({ booking: result.rows[0] }, { status: 201 });
  } catch (error) {
    console.error("Failed to create booking", error);
    return NextResponse.json({ message: "预约暂时无法提交，请稍后再试。" }, { status: 500 });
  }
}
