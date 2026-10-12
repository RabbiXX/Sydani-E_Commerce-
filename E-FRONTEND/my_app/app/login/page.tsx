"use client"; // Enabled React/Next.js Client Interactivity

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  // 1. Track text input fields across local memory state logs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 2. The handler function that speaks directly to your team's backend login route
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Points exactly to your team's router.post('/signin') endpoint.
      const response = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the authentication token so your application remembers who is logged in
        localStorage.setItem('token', data.token);
        alert('Welcome back! Login successful.');
        
        // Push the user directly onto your main e-commerce storefront landing path
        router.push('/home');
      } else {
        alert(`Login Failed: ${data.message || 'Please check your email and password credentials'}`);
      }
    } catch (error) {
      console.error('API Connection Error:', error);
      alert('Cannot connect to your backend server. Make sure your backend terminal window is actively running!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /* Full-Screen Hair Bundle Background Base Wrapper Grid Layout */
    <div className="w-full min-h-screen relative bg-[url('/images/background.jpg')] bg-cover bg-center flex flex-col p-4 md:p-6 font-sans">
      
      {/* HEADER SECTION: Floating Glassmorphic Top Menu Panel Bar */}
      <header className="w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-full py-2.5 px-6 flex items-center justify-between shadow-sm border border-white/20 z-10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-white text-xs font-serif italic">H</span>
          </div>
          <span className="text-base font-serif italic font-semibold text-stone-900 tracking-wide">Hair Haven</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-xs text-stone-600 hidden sm:inline">Don't have an account?</span>
          <a href="/signup">
            <button type="button" className="bg-[#3d1a04] hover:bg-[#251002] text-white text-xs font-medium px-4 py-1.5 rounded-full transition cursor-pointer">
              Sign up &gt;
            </button>
          </a>
        </div>
      </header>

      {/* CORE FORM LOGIN BODY LAYER WINDOW BOX CONTAINER */}
      <main className="flex-1 w-full flex items-center justify-center my-6 z-10">
        {/* Transparent container matching the signup style */}
        <div className="w-full max-w-md p-4 flex flex-col gap-4">
          
          <div className="text-left">
            <h1 className="text-3xl font-bold text-stone-950 tracking-tight">Log in</h1>
          </div>

          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            
            {/* Email Field input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-xs font-semibold text-stone-900">Email*</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full bg-white text-stone-900 text-sm p-3 rounded-lg border border-stone-300 outline-none focus:ring-2 focus:ring-amber-800/40 transition placeholder:text-stone-400"
                required 
              />
            </div>

            {/* Password Field input */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-xs font-semibold text-stone-900">Password*</label>
                <a href="/forgot-password" id="forgot-link" className="text-xs font-semibold text-stone-950 hover:underline">Forgot password?</a>
              </div>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-white text-stone-900 text-sm p-3 rounded-lg border border-stone-300 outline-none focus:ring-2 focus:ring-amber-800/40 transition placeholder:text-stone-400"
                required 
              />
            </div>

            {/* Submit Action Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 bg-[#42220f] hover:bg-[#2b1509] disabled:bg-stone-500 text-white font-medium py-3 rounded-lg text-sm shadow-md transition transform active:scale-[0.99] cursor-pointer"
            >
              {isLoading ? 'Logging you in...' : 'Log in'}
            </button>

            {/* Google Authentication Alternative */}
            <button 
              type="button"
              className="w-full bg-white hover:bg-stone-50 text-stone-800 font-medium py-2.5 rounded-lg text-sm shadow-sm border border-stone-200 flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <img className="h-4 w-4 object-contain" src="/images/google-logo.png" alt="Google" />
              Log in with Google
            </button>

            {/* Cross Route Navigation Info Prompt */}
            <div className="text-center mt-2 flex items-center justify-center gap-2 text-xs text-stone-900 bg-white/40 backdrop-blur-xs py-1.5 px-3 rounded-lg border border-white/20">
              <span className="font-medium text-stone-900 select-none">
                Don't have an account? <a href="/signup" className="text-stone-950 font-bold underline hover:text-[#42220f] transition ml-0.5">Sign up here</a>
              </span>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}
