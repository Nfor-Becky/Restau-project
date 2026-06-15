import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ─── Mock Data (replace with Redux state / API calls) ───────────────────────
const student = {
  name: "Jong Bruno",
  matricNo: "SC21A485",
  avatar: null, // set to image URL if available
};

const stats = [
  { label: "Meal Plan", value: "Standard Plan", unit: "", icon: "plan" },
  { label: "Total Credits", value: "20", unit: "Meals", icon: "total" },
  { label: "Remaining Credits", value: "12", unit: "Meals", icon: "remaining" },
  { label: "Meals Used", value: "8", unit: "Meals", icon: "used" },
];

const mealHistory = [
  { date: "2026-06-13", time: "12:30 PM", type: "Rice and groundnut soup", location: "Restau", status: "Success" },
  { date: "2026-05-14", time: "01:15 PM", type: "Garri and Eru", location: "Restau", status: "Success" },
  { date: "2026-05-15", time: "12:45 PM", type: "Rice and beans", location: "Restau", status: "Success" },
  { date: "2026-05-15", time: "12:45 PM", type: "Rice and beans", location: "Restau", status: "Reject" },
  { date: "2026-05-16", time: "02:20 PM", type: "Rice and stew", location: "Restau", status: "Success" },
];

const navItems = [
  { label: "Dashboard", path: "/student/dashboard", icon: "dashboard" },
  { label: "My QR Code", path: "/student/qrcode", icon: "qr" },
  { label: "My Meal Plan", path: "/student/mealplan", icon: "mealplan" },
  { label: "Meal History", path: "/student/history", icon: "history" },
  { label: "Profile", path: "/student/profile", icon: "profile" },
];

// ─── SVG Icons ───────────────────────────────────────────────────────────────
function Icon({ name, size = 22, color = "#1a6b3a" }) {
  const s = { width: size, height: size };
  switch (name) {
    case "dashboard":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "qr":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" /><path d="M14 14h2v2h-2zM18 14h3M14 18h2M18 18h3M18 21h3M21 14v3" />
        </svg>
      );
    case "mealplan":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    case "history":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
        </svg>
      );
    case "profile":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      );
    case "logout":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      );
    case "plan":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case "total":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
        </svg>
      );
    case "remaining":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      );
    case "used":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7" />
          <path d="M15 19l2 2 4-4" />
        </svg>
      );
    case "menu":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
          <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      );
    case "bell":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      );
    default:
      return null;
  }
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: dispatch logout action and clear token
    navigate("/login");
  };

  return (
    <>
      <style>{css}</style>

      <div className="dash-root">
        {/* ── Sidebar overlay (mobile) ── */}
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        {/* ── Sidebar ── */}
        <aside className={`sidebar ${sidebarOpen ? "sidebar--open" : ""}`}>
          {/* Brand */}
          <div className="sidebar-brand">
            <div className="brand-icon">
              <svg width="28" height="28" viewBox="0 0 38 38" fill="none">
                <path d="M12 8C12 8 10 14 10 19C10 24 12 28 12 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M12 14H18V19H12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 8V28M22 8C22 8 28 10 28 16C28 22 22 22 22 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="brand-name">QR Restaurant</div>
              <div className="brand-sub">Management System</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`nav-item ${activeNav === item.label ? "nav-item--active" : ""}`}
                onClick={() => { setActiveNav(item.label); setSidebarOpen(false); }}
              >
                <Icon name={item.icon} size={20} color={activeNav === item.label ? "#fff" : "#1a6b3a"} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Logout */}
          <button className="nav-item nav-item--logout" onClick={handleLogout}>
            <Icon name="logout" size={20} color="#e53935" />
            <span>Logout</span>
          </button>
        </aside>

        {/* ── Main ── */}
        <div className="dash-main">
          {/* Mobile top bar */}
          <header className="topbar">
            <button className="topbar-menu" onClick={() => setSidebarOpen(true)}>
              <Icon name="menu" size={24} color="#fff" />
            </button>
            <span className="topbar-title">Dashboard</span>
            <div className="topbar-right">
              <button className="topbar-icon-btn">
                <Icon name="bell" size={22} color="#fff" />
              </button>
              <div className="avatar avatar--small">
                {student.avatar ? <img src={student.avatar} alt="avatar" /> : student.name[0]}
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="dash-content">
            {/* Welcome row */}
            <div className="welcome-row">
              <div>
                <h1 className="welcome-name">Welcome, {student.name}</h1>
                <p className="welcome-matric">Matric No: {student.matricNo}</p>
              </div>
              <div className="avatar avatar--large">
                {student.avatar ? <img src={student.avatar} alt="avatar" /> : student.name[0]}
              </div>
            </div>

            {/* Stats grid */}
            <div className="stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-icon-wrap">
                    <Icon name={s.icon} size={26} color="#1a6b3a" />
                  </div>
                  <div className="stat-info">
                    <span className="stat-label">{s.label}</span>
                    <span className="stat-value">{s.value}</span>
                    {s.unit && <span className="stat-unit">{s.unit}</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom grid */}
            <div className="bottom-grid">
              {/* QR Card */}
              <div className="qr-card">
                <h3 className="qr-card-title">Generate QR Code</h3>
                <p className="qr-card-desc">Click the button below to generate your QR code</p>
                <button className="qr-btn">Generate QR Code</button>
              </div>

              {/* Meal History */}
              <div className="history-card">
                <div className="history-header">
                  <h3 className="history-title">Recent Meal History</h3>
                  <button className="view-all-btn">View all</button>
                </div>
                <div className="history-table-wrap">
                  <table className="history-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Meal Type</th>
                        <th>Location</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mealHistory.map((row, i) => (
                        <tr key={i}>
                          <td>{row.date}</td>
                          <td>{row.time}</td>
                          <td>{row.type}</td>
                          <td>{row.location}</td>
                          <td><span className="badge-success">{row.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile history list */}
                <div className="history-mobile">
                  {mealHistory.map((row, i) => (
                    <div key={i} className="history-mobile-row">
                      <div className="history-mobile-left">
                        <span className="history-mobile-date">
                          {new Date(row.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        <span className="history-mobile-type">{row.type}</span>
                      </div>
                      <span className="badge-success">{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile bottom nav ── */}
        <nav className="bottom-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`bottom-nav-item ${activeNav === item.label ? "bottom-nav-item--active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              <Icon name={item.icon} size={22} color={activeNav === item.label ? "#1a6b3a" : "#999"} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

// ─── CSS ─────────────────────────────────────────────────────────────────────
const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body { font-family: 'Segoe UI', sans-serif; background: #f4f6f4; }

  .dash-root {
    display: flex;
    min-height: 100vh;
    position: relative;
  }

  /* ── Sidebar ── */
  .sidebar {
    width: 220px;
    min-height: 100vh;
    background: #fff;
    border-right: 1px solid #e8ede8;
    display: flex;
    flex-direction: column;
    padding: 24px 14px 20px;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    flex-shrink: 0;
  }

  .sidebar-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
    padding-left: 4px;
  }

  .brand-icon {
    width: 46px; height: 46px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1a6b3a, #2e9e5b);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(26,107,58,0.3);
  }

  .brand-name { font-size: 13px; font-weight: 700; color: #1a1a1a; line-height: 1.2; }
  .brand-sub  { font-size: 10px; color: #1a6b3a; font-weight: 600; }

  .sidebar-nav { display: flex; flex-direction: column; gap: 4px; flex: 1; }

  .nav-item {
    display: flex; align-items: center; gap: 12px;
    padding: 11px 14px; border-radius: 12px;
    border: none; background: none; cursor: pointer;
    font-size: 14px; font-weight: 500; color: #444;
    text-align: left; width: 100%;
    transition: background 0.15s, color 0.15s;
  }
  .nav-item:hover { background: #f0f7f2; }
  .nav-item--active { background: #1a6b3a !important; color: #fff !important; font-weight: 600; }
  .nav-item--logout { color: #e53935; margin-top: 8px; }
  .nav-item--logout:hover { background: #fff5f5; }

  /* ── Main ── */
  .dash-main { flex: 1; display: flex; flex-direction: column; min-width: 0; }

  /* ── Topbar (mobile) ── */
  .topbar {
    display: none;
    align-items: center;
    justify-content: space-between;
    background: #1a6b3a;
    padding: 14px 16px;
    position: sticky; top: 0; z-index: 100;
  }
  .topbar-menu { background: none; border: none; cursor: pointer; display: flex; align-items: center; }
  .topbar-title { color: #fff; font-size: 18px; font-weight: 700; }
  .topbar-right { display: flex; align-items: center; gap: 12px; }
  .topbar-icon-btn { background: none; border: none; cursor: pointer; display: flex; align-items: center; }

  /* ── Content ── */
  .dash-content { padding: 28px 28px 20px; flex: 1; }

  /* ── Welcome ── */
  .welcome-row {
    display: flex; align-items: flex-start; justify-content: space-between;
    margin-bottom: 24px;
  }
  .welcome-name { font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; }
  .welcome-matric { font-size: 14px; color: #666; }

  /* ── Avatar ── */
  .avatar {
    border-radius: 50%; background: #1a6b3a;
    color: #fff; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden; flex-shrink: 0;
    font-size: 16px;
  }
  .avatar img { width: 100%; height: 100%; object-fit: cover; }
  .avatar--large { width: 52px; height: 52px; font-size: 20px; box-shadow: 0 4px 14px rgba(26,107,58,0.3); }
  .avatar--small { width: 36px; height: 36px; font-size: 14px; }

  /* ── Stats ── */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    margin-bottom: 24px;
  }

  .stat-card {
    background: #fff;
    border-radius: 16px;
    padding: 16px;
    display: flex; align-items: center; gap: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    border: 1px solid #f0f0f0;
  }
  .stat-icon-wrap {
    width: 48px; height: 48px; border-radius: 12px;
    background: #f0f7f2; display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .stat-info { display: flex; flex-direction: column; min-width: 0; }
  .stat-label { font-size: 11px; color: #888; font-weight: 500; margin-bottom: 2px; }
  .stat-value { font-size: 20px; font-weight: 800; color: #1a1a1a; line-height: 1.1; }
  .stat-unit  { font-size: 12px; color: #888; margin-top: 1px; }

  /* ── Bottom grid ── */
  .bottom-grid {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 20px;
    align-items: start;
  }

  /* ── QR Card ── */
  .qr-card {
    background: #1a6b3a;
    border-radius: 20px;
    padding: 24px 20px;
    display: flex; flex-direction: column; gap: 10px;
  }
  .qr-card-title { color: #fff; font-size: 18px; font-weight: 700; }
  .qr-card-desc  { color: rgba(255,255,255,0.8); font-size: 13px; line-height: 1.5; }
  .qr-btn {
    background: #fff; color: #1a6b3a;
    border: none; border-radius: 12px;
    padding: 13px; font-size: 15px; font-weight: 700;
    cursor: pointer; margin-top: 6px;
    transition: transform 0.1s, box-shadow 0.2s;
  }
  .qr-btn:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.15); transform: translateY(-1px); }
  .qr-btn:active { transform: translateY(0); }

  /* ── History Card ── */
  .history-card {
    background: #fff;
    border-radius: 20px;
    padding: 22px 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    border: 1px solid #f0f0f0;
  }
  .history-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
  .history-title  { font-size: 16px; font-weight: 700; color: #1a1a1a; }
  .view-all-btn   { background: none; border: none; color: #1a6b3a; font-size: 14px; font-weight: 600; cursor: pointer; }

  .history-table  { width: 100%; border-collapse: collapse; font-size: 13px; }
  .history-table thead tr { border-bottom: 1px solid #f0f0f0; }
  .history-table th { text-align: left; padding: 8px 10px; color: #888; font-weight: 600; font-size: 12px; }
  .history-table td { padding: 12px 10px; color: #333; border-bottom: 1px solid #f9f9f9; }
  .history-table tbody tr:last-child td { border-bottom: none; }
  .history-table tbody tr:hover td { background: #f9fdf9; }

  .history-mobile { display: none; }
  .history-mobile-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 12px 0; border-bottom: 1px solid #f0f0f0;
  }
  .history-mobile-row:last-child { border-bottom: none; }
  .history-mobile-left { display: flex; flex-direction: column; gap: 2px; }
  .history-mobile-date { font-size: 13px; color: #333; font-weight: 500; }
  .history-mobile-type { font-size: 12px; color: #888; }

  .badge-success {
    display: inline-block;
    background: #e8f5ee; color: #1a6b3a;
    font-size: 12px; font-weight: 600;
    padding: 3px 10px; border-radius: 20px;
  }

  /* ── Bottom Nav (mobile only) ── */
  .bottom-nav { display: none; }

  /* ── Overlay ── */
  .sidebar-overlay {
    display: none;
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.4);
    z-index: 199;
  }

  /* ══ RESPONSIVE ══════════════════════════════════════════════════════════ */
  @media (max-width: 1024px) {
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .bottom-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .sidebar {
      position: fixed; top: 0; left: 0; z-index: 200;
      transform: translateX(-100%);
      transition: transform 0.25s ease;
      height: 100vh;
    }
    .sidebar--open { transform: translateX(0); }
    .sidebar-overlay { display: block; }

    .topbar { display: flex; }
    .welcome-row { display: none; }

    .dash-content { padding: 16px 16px 90px; }

    .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 16px; }
    .stat-card { padding: 14px 12px; gap: 10px; }
    .stat-value { font-size: 18px; }

    .bottom-grid { grid-template-columns: 1fr; gap: 16px; }

    .history-table-wrap { display: none; }
    .history-mobile { display: block; }

    .bottom-nav {
      display: flex;
      position: fixed; bottom: 0; left: 0; right: 0;
      background: #fff; border-top: 1px solid #e8e8e8;
      padding: 8px 0 14px; z-index: 100;
      justify-content: space-around;
    }
    .bottom-nav-item {
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      background: none; border: none; cursor: pointer;
      font-size: 10px; color: #999; font-weight: 500;
      padding: 4px 8px;
    }
    .bottom-nav-item--active { color: #1a6b3a; font-weight: 700; }
  }

  @media (max-width: 400px) {
    .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .stat-card { padding: 12px 10px; }
    .stat-label { font-size: 10px; }
    .stat-value { font-size: 16px; }
  }
`;
