"use client";

import React, { useState } from 'react';

export default function Dashboard() {
  const [mealPlan, setMealPlan] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const generateMealPlan = () => {
    setLoading(true);
    setTimeout(() => {
      setMealPlan({
        breakfast: { name: "Avocado Toast with Poached Egg", calories: 350, protein: "15g", time: "10 min" },
        lunch: { name: "Quinoa Bowl with Roasted Veggies", calories: 450, protein: "20g", time: "20 min" },
        dinner: { name: "Grilled Salmon with Asparagus", calories: 550, protein: "45g", time: "25 min" },
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] font-sans">
      {/* Top Navbar */}
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">CookFlow AI</span>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-sm font-medium text-gray-500 hover:text-gray-900">Dashboard</button>
          <button className="text-sm font-medium text-gray-500 hover:text-gray-900">Pantry</button>
          <button className="text-sm font-medium text-gray-500 hover:text-gray-900">Analytics</button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 shadow-sm border-2 border-white"></div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">Good Morning, Alex 👋</h1>
            <p className="text-lg text-gray-500">Here's your optimized health and budget overview for today.</p>
          </div>
          <button 
            onClick={generateMealPlan}
            className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            {loading ? (
              <span className="animate-pulse">AI is generating...</span>
            ) : (
              <>✨ Generate New AI Plan</>
            )}
          </button>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 transition-transform hover:scale-[1.02]">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Nutrition Score</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-gray-900">92</span>
              <span className="text-gray-400 text-lg mb-1">/ 100</span>
            </div>
            <div className="mt-4 w-full bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-[92%]"></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 transition-transform hover:scale-[1.02]">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Daily Budget</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-gray-900">$12</span>
              <span className="text-gray-400 text-lg mb-1">/ $20</span>
            </div>
            <div className="mt-4 w-full bg-gray-100 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full w-[60%]"></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 transition-transform hover:scale-[1.02]">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Pantry Utilization</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-gray-900">78%</span>
            </div>
            <p className="text-sm text-green-600 mt-2 font-medium">↑ 12% food waste reduced</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-lg text-white transition-transform hover:scale-[1.02]">
            <h3 className="text-green-50 text-sm font-medium mb-1">Monthly Savings</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">$145</span>
            </div>
            <p className="text-sm text-green-100 mt-2">Compared to ordering out</p>
          </div>
        </section>

        {/* AI Meal Plan & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Today's AI Menu</h2>
              <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Optimized for Muscle Gain</span>
            </div>
            
            <div className="space-y-4">
              {['breakfast', 'lunch', 'dinner'].map((meal, idx) => (
                <div key={idx} className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex justify-between items-center cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-xl">
                      {meal === 'breakfast' ? '🍳' : meal === 'lunch' ? '🥗' : '🥩'}
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">{meal}</h4>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {mealPlan ? mealPlan[meal].name : 'Loading personalized meal...'}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                        <span className="flex items-center gap-1">⏱ {mealPlan ? mealPlan[meal].time : '...'}</span>
                        <span className="flex items-center gap-1">🔥 {mealPlan ? mealPlan[meal].calories : '...'} kcal</span>
                        <span className="flex items-center gap-1">💪 {mealPlan ? mealPlan[meal].protein : '...'} protein</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-300 group-hover:text-gray-900 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-green-500 rounded-full blur-3xl opacity-20"></div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-green-400">✨</span> Chef Buddy Insights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                  <div className="text-xl">💡</div>
                  <p className="text-sm text-gray-200">You already own <strong className="text-white">80%</strong> of the ingredients required for today's meals.</p>
                </li>
                <li className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/5 backdrop-blur-sm">
                  <div className="text-xl">💰</div>
                  <p className="text-sm text-gray-200">Replacing salmon with chicken tonight saves you <strong className="text-green-400">$6.50</strong>.</p>
                </li>
              </ul>
              <button className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white font-medium py-2 rounded-xl transition-colors border border-white/10">
                Ask Chef Buddy
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Smart Grocery List</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 text-green-500 rounded focus:ring-green-500 border-gray-300" />
                  <span className="text-gray-700 font-medium">Asparagus (1 bunch)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 text-green-500 rounded focus:ring-green-500 border-gray-300" />
                  <span className="text-gray-700 font-medium">Wild Salmon (2 fillets)</span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-green-500 rounded focus:ring-green-500 border-gray-300" />
                  <span className="text-gray-400 font-medium line-through">Quinoa (1 bag)</span>
                </label>
              </div>
              <button className="w-full mt-4 text-green-600 font-medium py-2 hover:bg-green-50 rounded-xl transition-colors text-sm">
                View Full List →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
