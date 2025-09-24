// Toast.js
function Toast({ onClose,message }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "white",
        padding: "14px 20px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        minWidth: "260px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        animation: "fadeIn 0.3s ease",
      }}
    >
      <div>
        <strong>upload complete</strong>
        <p style={{ margin: "4px 0", fontSize: "14px", color: "#444" }}>
     {message}
        </p>
      </div>
      <button
        onClick={onClose}
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;
