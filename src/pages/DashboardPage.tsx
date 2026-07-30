import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";

type NavigationItem = {
  label: string;
  icon: string;
  path?: string;
};

type CandidateMatch = {
  name: string;
  role: string;
  score: number;
  initials: string;
};

const navigationItems: NavigationItem[] = [
  { label: "Dashboard", icon: "⌂", path: "/dashboard" },
  { label: "Job Openings", icon: "◫", path: "/jobs" },
  { label: "Candidates", icon: "◎" },
  { label: "Applications", icon: "◇" },
  { label: "Interviews", icon: "◷" },
  { label: "Analytics", icon: "↗" },
];

const candidateMatches: CandidateMatch[] = [
  {
    name: "Sophia Bennett",
    role: "Senior Frontend Developer",
    score: 96,
    initials: "SB",
  },
  {
    name: "Daniel Carter",
    role: "Backend Engineer",
    score: 92,
    initials: "DC",
  },
  {
    name: "Olivia Turner",
    role: "Product Designer",
    score: 89,
    initials: "OT",
  },
  {
    name: "Liam Walker",
    role: "Data Scientist",
    score: 86,
    initials: "LW",
  },
];

function DashboardPage() {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentDate = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    }).format(new Date());
  }, []);

  const handleNavigation = (item: NavigationItem) => {
    setActiveItem(item.label);
    setIsSidebarOpen(false);

    if (item.path) {
      navigate(item.path);
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard-shell">
      <aside
        className={`dashboard-sidebar ${
          isSidebarOpen ? "dashboard-sidebar-open" : ""
        }`}
      >
        <div className="dashboard-brand">
          <div className="dashboard-brand-logo">R</div>

          <div>
            <strong>RecruitAI</strong>
            <span>Talent Intelligence</span>
          </div>
        </div>

        <nav className="dashboard-navigation">
          <span className="navigation-label">Workspace</span>

          {navigationItems.map((item) => (
            <button
              key={item.label}
              className={`navigation-item ${
                activeItem === item.label ? "navigation-item-active" : ""
              }`}
              type="button"
              onClick={() => handleNavigation(item)}
            >
              <span className="navigation-icon">{item.icon}</span>
              <span>{item.label}</span>

              {item.label === "Applications" && (
                <span className="navigation-badge">24</span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-upgrade-card">
          <span className="upgrade-label">RecruitAI Pro</span>

          <strong>Unlock advanced AI insights</strong>

          <p>
            Access candidate predictions, automated screening and deeper
            analytics.
          </p>

          <button type="button">Explore features</button>
        </div>

        <div className="sidebar-user">
          <div className="sidebar-user-avatar">EG</div>

          <div className="sidebar-user-info">
            <strong>Elif Gür</strong>
            <span>Administrator</span>
          </div>

          <button
            className="sidebar-logout"
            type="button"
            aria-label="Log out"
            onClick={handleLogout}
          >
            ↪
          </button>
        </div>
      </aside>

      {isSidebarOpen && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-left">
            <button
              className="menu-button"
              type="button"
              aria-label="Open navigation"
              onClick={() => setIsSidebarOpen(true)}
            >
              ☰
            </button>

            <div>
              <p>{currentDate}</p>
              <h1>Recruitment Overview</h1>
            </div>
          </div>

          <div className="header-actions">
            <label className="dashboard-search">
              <span>⌕</span>

              <input
                type="search"
                placeholder="Search candidates or jobs"
              />
            </label>

            <button
              className="notification-button"
              type="button"
              aria-label="Notifications"
            >
              ♢
              <span />
            </button>

            <button
              className="primary-action"
              type="button"
              onClick={() => navigate("/jobs")}
            >
              <span>＋</span>
              Create job
            </button>
          </div>
        </header>

        <section className="welcome-banner">
          <div>
            <span className="welcome-eyebrow">Hiring performance</span>

            <h2>Good afternoon, Elif.</h2>

            <p>
              Your recruitment pipeline is performing well. You have 12 strong
              candidate matches waiting for review.
            </p>
          </div>

          <div className="welcome-score">
            <span>Hiring score</span>
            <strong>87</strong>
            <small>↑ 8% this month</small>
          </div>
        </section>

        <section className="statistics-grid">
          <article className="stat-card">
            <div className="stat-card-header">
              <span className="stat-icon">◫</span>
              <span className="stat-trend positive">+12%</span>
            </div>

            <strong>18</strong>
            <p>Active job openings</p>
            <small>3 closing this week</small>
          </article>

          <article className="stat-card">
            <div className="stat-card-header">
              <span className="stat-icon">◎</span>
              <span className="stat-trend positive">+24%</span>
            </div>

            <strong>248</strong>
            <p>Total candidates</p>
            <small>36 added this month</small>
          </article>

          <article className="stat-card">
            <div className="stat-card-header">
              <span className="stat-icon">◇</span>
              <span className="stat-trend positive">+9%</span>
            </div>

            <strong>84</strong>
            <p>Applications in review</p>
            <small>24 need attention</small>
          </article>

          <article className="stat-card">
            <div className="stat-card-header">
              <span className="stat-icon">◷</span>
              <span className="stat-trend neutral">This week</span>
            </div>

            <strong>16</strong>
            <p>Scheduled interviews</p>
            <small>Next interview at 14:30</small>
          </article>
        </section>

        <section className="dashboard-content-grid">
          <article className="dashboard-card candidate-card">
            <div className="card-heading">
              <div>
                <span className="section-eyebrow">AI recommendations</span>
                <h3>Top candidate matches</h3>
              </div>

              <button type="button">View all</button>
            </div>

            <div className="candidate-list">
              {candidateMatches.map((candidate) => (
                <div className="candidate-row" key={candidate.name}>
                  <div className="candidate-avatar">
                    {candidate.initials}
                  </div>

                  <div className="candidate-information">
                    <strong>{candidate.name}</strong>
                    <span>{candidate.role}</span>
                  </div>

                  <div className="candidate-score">
                    <div className="score-heading">
                      <span>Match score</span>
                      <strong>{candidate.score}%</strong>
                    </div>

                    <div className="score-track">
                      <span style={{ width: `${candidate.score}%` }} />
                    </div>
                  </div>

                  <button
                    className="candidate-action"
                    type="button"
                    aria-label={`Open ${candidate.name}`}
                  >
                    →
                  </button>
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-card pipeline-card">
            <div className="card-heading">
              <div>
                <span className="section-eyebrow">Live pipeline</span>
                <h3>Application stages</h3>
              </div>

              <button type="button">Details</button>
            </div>

            <div className="pipeline-list">
              <div className="pipeline-item">
                <div>
                  <span>New applications</span>
                  <strong>38</strong>
                </div>

                <div className="pipeline-track">
                  <span style={{ width: "88%" }} />
                </div>
              </div>

              <div className="pipeline-item">
                <div>
                  <span>Screening</span>
                  <strong>26</strong>
                </div>

                <div className="pipeline-track">
                  <span style={{ width: "68%" }} />
                </div>
              </div>

              <div className="pipeline-item">
                <div>
                  <span>Interview</span>
                  <strong>16</strong>
                </div>

                <div className="pipeline-track">
                  <span style={{ width: "49%" }} />
                </div>
              </div>

              <div className="pipeline-item">
                <div>
                  <span>Offer stage</span>
                  <strong>7</strong>
                </div>

                <div className="pipeline-track">
                  <span style={{ width: "27%" }} />
                </div>
              </div>
            </div>

            <div className="pipeline-summary">
              <div>
                <strong>12.4 days</strong>
                <span>Average time to hire</span>
              </div>

              <div>
                <strong>74%</strong>
                <span>Interview success rate</span>
              </div>
            </div>
          </article>
        </section>

        <section className="dashboard-card activity-card">
          <div className="card-heading">
            <div>
              <span className="section-eyebrow">Recent updates</span>
              <h3>Recruitment activity</h3>
            </div>

            <button type="button">View activity</button>
          </div>

          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-marker" />

              <div>
                <strong>New candidate matched</strong>
                <p>
                  Sophia Bennett received a 96% match score for Senior Frontend
                  Developer.
                </p>
              </div>

              <time>12 min ago</time>
            </div>

            <div className="activity-item">
              <span className="activity-marker" />

              <div>
                <strong>Interview scheduled</strong>
                <p>
                  Daniel Carter was invited to a technical interview on Friday.
                </p>
              </div>

              <time>48 min ago</time>
            </div>

            <div className="activity-item">
              <span className="activity-marker" />

              <div>
                <strong>Job opening published</strong>
                <p>
                  Data Scientist position is now visible on the careers portal.
                </p>
              </div>

              <time>2 hours ago</time>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;