import React, { useState } from 'react';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  error?: string;
}

const Login: React.FC<LoginProps> = ({ onLogin, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      onLogin(email, password);
      setIsLoading(false);
    }, 1000);
  };

  const fillDemoCredentials = () => {
    setEmail('jamie.sullivan@ada.ac.uk');
    setPassword('student123');
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <span className="login-logo-icon">🎓</span>
              <h1>ADA Place & Progress</h1>
            </div>
            <p className="login-subtitle">Welcome back to your placement journey</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                📧 Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="Enter your ADA email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                🔒 Password
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {error && (
              <div className="error-message">
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              className={`login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Signing In...
                </>
              ) : (
                <>
                  🚀 Sign In to Dashboard
                </>
              )}
            </button>

            <div className="demo-section">
              <div className="demo-divider">
                <span>Demo Access</span>
              </div>
              <button
                type="button"
                className="demo-btn"
                onClick={fillDemoCredentials}
              >
                👨‍🎓 Use Student Demo Account
              </button>
              <p className="demo-note">
                Click above to auto-fill Jamie Sullivan's student credentials
              </p>
            </div>

            <div className="login-footer">
              <div className="login-links">
                <a href="#" className="login-link">🔑 Forgot Password?</a>
                <a href="#" className="login-link">📞 Need Help?</a>
              </div>
              <p className="login-info">
                New to ADA? Contact your course coordinator for access.
              </p>
            </div>
          </form>
        </div>

        <div className="login-features">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Find Perfect Placements</h3>
            <p>AI-powered matching connects you with industry opportunities that align with your skills and career goals.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Track Your Progress</h3>
            <p>Monitor your placement journey with detailed analytics and real-time feedback from industry supervisors.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Build Your Career</h3>
            <p>Develop professional skills and earn certifications that enhance your employability in the digital sector.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;