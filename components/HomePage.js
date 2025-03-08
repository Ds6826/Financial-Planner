import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="homepage-container">
      <div className="homepage-card">
        {/* Logo and Title */}
        <div className="homepage-header">
          <img src="/lotus.png" alt="Logo" className="homepage-logo" />
          <h1>Welcome to Lotus</h1>
          <p>Sign in to manage your finances</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 border-gray-300 rounded text-purple-600 focus:ring-2 focus:ring-purple-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">Remember e</label>
            </div>
            <a href="#" className="text-sm text-purple-600 hover:text-purple-800">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Sign in
            </button>
          </div>

          {/* Sign up Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don’t have an account? <a href="/signup" className="text-purple-600 hover:text-purple-800">Sign up</a>
            </p>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          By signing in, you agree to our <a href="#" className="text-purple-600 hover:text-purple-800">Terms of Service</a> and <a href="#" className="text-purple-600 hover:text-purple-800">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default Login;
