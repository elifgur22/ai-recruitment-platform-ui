import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <main className="login-page">
      <section className="login-showcase">
        <div className="showcase-overlay" />

        <div className="brand">
          <div className="brand-logo">R</div>

          <div>
            <span className="brand-name">RecruitAI</span>
            <span className="brand-subtitle">
              Intelligent Hiring Platform
            </span>
          </div>
        </div>

        <div className="showcase-content">
          <span className="showcase-badge">
            AI-powered recruitment
          </span>

          <h1>
            Find exceptional talent
            <span> faster and smarter.</span>
          </h1>

          <p>
            Streamline your entire recruitment process, discover the best
            candidates and make data-driven hiring decisions.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">01</div>

              <div>
                <strong>AI Candidate Matching</strong>
                <span>
                  Automatically match candidates with the right job openings.
                </span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">02</div>

              <div>
                <strong>Smart Recruitment Analytics</strong>
                <span>
                  Track hiring performance through meaningful insights.
                </span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">03</div>

              <div>
                <strong>Centralized Talent Pipeline</strong>
                <span>
                  Manage applications, interviews and offers in one place.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-footer">
          <span>Trusted recruitment technology</span>

          <div className="company-list">
            <span>NOVA</span>
            <span>QUANTUM</span>
            <span>VERTEX</span>
          </div>
        </div>
      </section>

      <section className="login-panel">
        <div className="login-card">
          <div className="mobile-brand">
            <div className="brand-logo">R</div>
            <span className="brand-name">RecruitAI</span>
          </div>

          <div className="login-heading">
            <span className="welcome-label">Welcome back</span>

            <h2>Sign in to your account</h2>

            <p>
              Enter your credentials to access your recruitment workspace.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Work email</label>

              <div className="input-wrapper">
                <span className="input-icon">@</span>

                <input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="name@company.com"
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="password-label-row">
                <label htmlFor="password">Password</label>

                <button
                  className="forgot-password"
                  type="button"
                >
                  Forgot password?
                </button>
              </div>

              <div className="input-wrapper">
                <span className="input-icon">✦</span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  onChange={(event) => setPassword(event.target.value)}
                />

                <button
                  className="password-toggle"
                  type="button"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  onClick={() => setShowPassword((current) => !current)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(event.target.checked)
                  }
                />

                <span>Remember me</span>
              </label>
            </div>

            {error && <div className="form-error">{error}</div>}

            <button className="login-button" type="submit">
              <span>Sign in</span>
              <span className="button-arrow">→</span>
            </button>
          </form>

          <div className="login-divider">
            <span>Demo access</span>
          </div>

          <div className="demo-information">
            You can enter any email and password during development.
          </div>

          <p className="login-footer">
            © 2026 RecruitAI. Secure enterprise recruitment platform.
          </p>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;