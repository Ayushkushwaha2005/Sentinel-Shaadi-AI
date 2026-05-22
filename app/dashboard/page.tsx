"use client";

export default function DashboardPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "20px",
          background: "linear-gradient(to right,#60a5fa,#a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Sentinel Shaadi AI Dashboard
      </h1>

      <p
        style={{
          color: "#cbd5e1",
          fontSize: "18px",
          marginBottom: "40px",
        }}
      >
        AI-powered wedding management and smart planning system.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#111827",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #374151",
          }}
        >
          <h2>Wedding Plans</h2>
          <p>Generate AI-based wedding blueprints instantly.</p>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #374151",
          }}
        >
          <h2>Budget Analytics</h2>
          <p>Track catering, venue, and decoration costs.</p>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #374151",
          }}
        >
          <h2>Emergency Support</h2>
          <p>Smart emergency response and backup planning.</p>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #374151",
          }}
        >
          <h2>VIP Management</h2>
          <p>Premium guest handling and security features.</p>
        </div>
      </div>
    </div>
  );
}