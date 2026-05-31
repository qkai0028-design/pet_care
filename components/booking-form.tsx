"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("submitting");
    setMessage("");

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "预约提交失败。");
      }

      form.reset();
      setState("success");
      setMessage("预约已提交，我们会尽快联系你确认档期。");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "预约提交失败。");
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="你的称呼" aria-label="你的称呼" required />
      <input type="tel" name="phone" placeholder="联系电话" aria-label="联系电话" required />
      <select name="service" aria-label="选择服务" defaultValue="" required>
        <option value="">选择服务</option>
        <option>轻柔净洗</option>
        <option>全套洗护</option>
        <option>修剪造型</option>
        <option>猫咪护理</option>
      </select>
      <button className="button" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "提交中" : "提交预约"}
      </button>
      {message ? (
        <p className={`form-message ${state === "error" ? "error" : "success"}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
