"use client"; // Enabled React/Next.js Client Interactivity

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();

  // 1. Track user text input fields across local memory state logs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 2. The dynamic handler function that speaks directly to your team backend router
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Points exactly to your team's /signup route. Adjust port 5000 if your backend terminal runs on another port.
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Account created successfully!');
        router.push('/login'); // Sends them to sign in next
      } else {
        alert(`Registration Failed: ${data.message || 'Please check your input parameters'}`);
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
        {/* Brand Logo Identity Title Anchor Tag Link Layout */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-white text-xs font-serif italic">H</span>
          </div>
          <span className="text-base font-serif italic font-semibold text-stone-900 tracking-wide">Hair Haven</span>
        </div>
        
        {/* Sub Navigation Routing Link Actions Panel Wrapper */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-stone-600 hidden sm:inline">Already have an account login?</span>
          <a href="/login">
            <button type="button" className="bg-[#3d1a04] hover:bg-[#251002] text-white text-xs font-medium px-4 py-1.5 rounded-full transition cursor-pointer">
              Sign up &gt;
            </button>
          </a>
        </div>
      </header>

      {/* CORE FORM REGISTRATION BODY LAYER WINDOW BOX CONTAINER */}
      <main className="flex-1 w-full flex items-center justify-center my-6 z-10">
        {/* No card background - entirely transparent container tracking your figma frame layout */}
        <div className="w-full max-w-md p-4 flex flex-col gap-4">
          
          {/* Main Title Heading Layout Typography Header */}
          <div className="text-left">
            <h1 className="text-3xl font-bold text-stone-950 tracking-tight">Sign up</h1>
          </div>

          {/* Form Processing Submitter Action Framework */}
          <form onSubmit={handleSignupSubmit} className="flex flex-col gap-4">
            
            {/* Full Name Variable Input Container Box Line */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-xs font-semibold text-stone-900">Name*</label>
              <input 
                type="text" 
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name" 
                className="w-full bg-white text-stone-900 text-sm p-3 rounded-lg border border-stone-300 outline-none focus:ring-2 focus:ring-amber-800/40 transition placeholder:text-stone-400"
                required 
              />
            </div>

            {/* Email Address Mapping Variable Input Container Box Line */}
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

            {/* Security Password Box Layout Field Input Section */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-xs font-semibold text-stone-900">Password*</label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                className="w-full bg-white text-stone-900 text-sm p-3 rounded-lg border border-stone-300 outline-none focus:ring-2 focus:ring-amber-800/40 transition placeholder:text-stone-400"
                required 
              />
              <span className="text-[11px] font-medium text-stone-800/90 mt-0.5">Must be at least 8 characters.</span>
            </div>

            {/* Submit Execution Milestone Action Layout Button Trigger */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 bg-[#42220f] hover:bg-[#2b1509] disabled:bg-stone-500 text-white font-medium py-3 rounded-lg text-sm shadow-md transition transform active:scale-[0.99] cursor-pointer"
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </button>

            {/* Alternative Third Party OAuth Google Submitter Panel Container Row */}
            <button 
              type="button"
              className="w-full bg-white hover:bg-stone-50 text-stone-800 font-medium py-2.5 rounded-lg text-sm shadow-sm border border-stone-200 flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <img className="h-4 w-4 object-contain" src="/images/google-logo.png" alt="Google" />
              Sign up with Google
            </button>

            {/* Bottom Form Redirection Router Info Prompt Segment Link */}
            <div className="text-center mt-2 flex items-center justify-center gap-2 text-xs text-stone-900 bg-white/40 backdrop-blur-xs py-1.5 px-3 rounded-lg border border-white/20">
              <input 
                type="checkbox" 
                id="terms" 
                className="w-4 h-4 rounded accent-[#42220f] cursor-pointer" 
              />
              <label htmlFor="terms" className="cursor-pointer font-medium text-stone-900 select-none">
                Already have an account? <a href="/login" className="text-stone-950 font-bold underline hover:text-[#42220f] transition ml-0.5">Log in</a>
              </label>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}
