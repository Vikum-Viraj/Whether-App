import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function AuthPage() {

  const { loginWithRedirect, isLoading } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithRedirect();
  };

  if (isLoading) {
    return <div className='flex justify-center'>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-3xl">☁️</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome Back
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Sign in to continue
            </p>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 mt-6"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            <button
              onClick={() => navigate('/')}
              className="text-blue-600 font-semibold hover:underline"
            >
              Back to Home
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;