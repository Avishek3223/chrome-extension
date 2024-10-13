import React, { useState } from 'react';
import './style.css'

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="w-full p-[16px] border-none">
      <div className="p-6 bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-xl font-bold text-left text-gray-800">
          LinkedIn AI Message Assistant
        </h1>
        
        <p className="text-sm text-gray-600 text-left">
          Automatically generate personalized messages for your LinkedIn connections using AI. Toggle the switch below to enable or disable this feature.
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className={`text-sm ${isEnabled ? 'text-blue-600' : 'text-red-600'} font-medium`}>
            {isEnabled ? 'AI Assistant Enabled' : 'AI Assistant Disabled'}
          </span>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only" checked={isEnabled} onChange={handleToggle} />
              <div className={`block w-14 h-8 rounded-full ${isEnabled ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isEnabled ? 'transform translate-x-6' : ''}`}></div>
            </div>
          </label>
        </div>

        <p className="text-xs text-left text-gray-500 mt-4">
          Version 1.0 | Created by Avishek Mishra
        </p>
      </div>
    </div>
  );
};

export default App;
