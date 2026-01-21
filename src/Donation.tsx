import { useState } from 'react';
import { Plus, X } from 'lucide-react';

type Jean = {
  id: number;
  size: string;
  color: string;
};

const Donation = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [jeans, setJeans] = useState<Jean[]>([{ id: 1, size: '', color: '' }]);

  const addJean = () => {
    setJeans([...jeans, { id: Date.now(), size: '', color: '' }]);
  };

  const removeJean = (id: number) => {
    if (jeans.length > 1) {
      setJeans(jeans.filter(jean => jean.id !== id));
    }
  };

  const updateJean = (id: number, field: 'size' | 'color', value: string) => {
    setJeans(jeans.map(jean => 
      jean.id === id ? { ...jean, [field]: value } : jean
    ));
  };

  const handleSubmit = () => {
    console.log({
      firstName,
      lastName,
      email,
      location,
      jeans
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="flex items-center gap-8">        
        {/* Donation Form Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Jean Donation Form</h2>
          
          <div className="flex gap-6">
            {/* Left Column - Personal Info */}
            <div className="space-y-5 w-[280px]">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter first name"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter last name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter email address"
                />
              </div>

              {/* Meeting Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Meeting Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter meeting location"
                />
              </div>
            </div>

            {/* Right Column - Jeans Details */}
            <div className="w-[280px]">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Jeans Details
                </label>
                <button
                  onClick={addJean}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </div>

              <div className="space-y-3 max-h-[340px] overflow-y-auto pr-2">
                {jeans.map((jean) => (
                  <div key={jean.id} className="flex gap-3 items-start bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex-1 space-y-2">
                      <input
                        type="text"
                        value={jean.size}
                        onChange={(e) => updateJean(jean.id, 'size', e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Size (e.g., 32x34)"
                      />
                      <input
                        type="text"
                        value={jean.color}
                        onChange={(e) => updateJean(jean.id, 'color', e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Color (e.g., Blue)"
                      />
                    </div>
                    {jeans.length > 1 && (
                      <button
                        onClick={() => removeJean(jean.id)}
                        className="text-red-500 hover:text-red-600 transition-colors mt-1"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg mt-6 transition-colors shadow-sm"
          >
            Submit Donation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;