import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function AuthPage() {
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    const modeParam = searchParams.get('mode');
    if (modeParam === 'signup') {
      setMode('signup');
    } else {
      setMode('signin');
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password || (mode === 'signup' && !form.name)) {
      setError('Please fill all fields');
      return;
    }
    setError(null);
    alert(`${mode === 'signup' ? 'Sign Up' : 'Sign In'} successful!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-500">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl border border-blue-300 mt-10">
          <div className="flex justify-center mb-6">
            <button
              className={`px-6 py-2 rounded-l-xl font-bold text-lg ${mode === 'signin' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'} transition`}
              onClick={() => setMode('signin')}
            >
              Sign In
            </button>
            <button
              className={`px-6 py-2 rounded-r-xl font-bold text-lg ${mode === 'signup' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'} transition`}
              onClick={() => setMode('signup')}
            >
              Sign Up
            </button>
          </div>
          <h2 className="text-3xl font-extrabold mb-4 text-blue-700 text-center">
            {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'signup' && (
              <div>
                <label className="block text-blue-800 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-400 bg-blue-50"
                  autoComplete="off"
                />
              </div>
            )}
            <div>
              <label className="block text-blue-800 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-400 bg-blue-50"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-blue-800 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-400 bg-blue-50"
                autoComplete="off"
              />
            </div>
            {error && <div className="text-red-600 text-center">{error}</div>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg"
            >
              {mode === 'signup' ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
