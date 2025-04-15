export const detailViews = {
    'Satellite View': `
        <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold">Satellite View</h2>
                <div>
                    <label class="mr-2">View Historical Data:</label>
                    <input type="date" class="border rounded p-2" value="2023-07-15">
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="col-span-2">
                    <div class="bg-gray-200 rounded-lg overflow-hidden" style="height: 400px; position: relative;">
                        <img src="https://source.unsplash.com/random/800x400/?satellite,farmland" alt="Satellite View" class="w-full h-full object-cover">
                        <div class="absolute top-2 right-2 bg-white bg-opacity-80 rounded p-2">
                            <div class="flex space-x-2 mb-2">
                                <button class="bg-blue-500 text-white rounded-full px-4 py-1">NDVI</button>
                                <button class="bg-gray-200 rounded-full px-4 py-1">Soil Moisture</button>
                                <button class="bg-gray-200 rounded-full px-4 py-1">Weather</button>
                            </div>
                            <div class="flex space-x-2">
                                <button class="bg-gray-200 rounded-full px-4 py-1">Crop Cover</button>
                                <button class="bg-gray-200 rounded-full px-4 py-1">Plot Boundary</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-white border rounded-lg p-4 mb-4">
                        <h3 class="font-semibold text-lg mb-2">Plot Details</h3>
                        <div class="text-sm space-y-2">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Size:</span>
                                <span class="font-medium">2.5 Acres</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Current Crop:</span>
                                <span class="font-medium">Wheat</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Planting Date:</span>
                                <span class="font-medium">15 June 2023</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Health Index:</span>
                                <span class="font-medium text-green-500">Good (87%)</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white border rounded-lg p-4">
                        <h3 class="font-semibold text-lg mb-2">NDVI Analysis</h3>
                        <div class="h-32 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded mb-3"></div>
                        <div class="text-sm space-y-2">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Overall Health:</span>
                                <span class="text-green-500 font-medium">Above Average</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Concern Areas:</span>
                                <span class="text-yellow-500 font-medium">North-East Corner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'Farm Diary': `
        <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold">Farm Diary</h2>
                <button class="bg-green-500 text-white rounded-lg px-4 py-2 flex items-center">
                    <i class="bi bi-plus-lg mr-2"></i> Add New Entry
                </button>
            </div>
            <div class="grid grid-cols-1 gap-6">
                <div class="border-l-4 border-green-500 pl-4 py-2 relative">
                    <div class="absolute -left-3 bg-white rounded-full p-1 border-2 border-green-500">
                        <i class="bi bi-seed text-green-500"></i>
                    </div>
                    <h3 class="font-semibold">15 June 2023 - Sowing</h3>
                    <p class="text-gray-600 text-sm mt-1">Wheat sowing completed for North field (2.5 acres)</p>
                    <div class="mt-2 grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span class="text-gray-500">Seed Variety:</span>
                            <span class="ml-2 font-medium">HD-2967</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Quantity:</span>
                            <span class="ml-2 font-medium">100kg</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Method:</span>
                            <span class="ml-2 font-medium">Line sowing</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Labor Cost:</span>
                            <span class="ml-2 font-medium">₹2500</span>
                        </div>
                    </div>
                    <div class="flex mt-3">
                        <button class="text-blue-500 text-sm">Edit</button>
                        <button class="text-blue-500 text-sm ml-4">Add Photo</button>
                    </div>
                </div>
                
                <div class="border-l-4 border-blue-500 pl-4 py-2 relative">
                    <div class="absolute -left-3 bg-white rounded-full p-1 border-2 border-blue-500">
                        <i class="bi bi-droplet text-blue-500"></i>
                    </div>
                    <h3 class="font-semibold">25 June 2023 - Irrigation</h3>
                    <p class="text-gray-600 text-sm mt-1">First irrigation after sowing</p>
                    <div class="mt-2 grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span class="text-gray-500">Water Source:</span>
                            <span class="ml-2 font-medium">Tube Well</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Duration:</span>
                            <span class="ml-2 font-medium">5 hours</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Field Coverage:</span>
                            <span class="ml-2 font-medium">100%</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Cost:</span>
                            <span class="ml-2 font-medium">₹800 (Diesel)</span>
                        </div>
                    </div>
                    <div class="flex mt-3">
                        <button class="text-blue-500 text-sm">Edit</button>
                        <button class="text-blue-500 text-sm ml-4">Add Photo</button>
                    </div>
                </div>
                
                <div class="border-l-4 border-yellow-500 pl-4 py-2 relative">
                    <div class="absolute -left-3 bg-white rounded-full p-1 border-2 border-yellow-500">
                        <i class="bi bi-bucket text-yellow-500"></i>
                    </div>
                    <h3 class="font-semibold">12 July 2023 - Fertilizer Application</h3>
                    <p class="text-gray-600 text-sm mt-1">First dose of fertilizer applied</p>
                    <div class="mt-2 grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span class="text-gray-500">Fertilizer Type:</span>
                            <span class="ml-2 font-medium">Urea</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Quantity:</span>
                            <span class="ml-2 font-medium">80kg</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Application Method:</span>
                            <span class="ml-2 font-medium">Broadcasting</span>
                        </div>
                        <div>
                            <span class="text-gray-500">Cost:</span>
                            <span class="ml-2 font-medium">₹1200</span>
                        </div>
                    </div>
                    <div class="flex mt-3">
                        <button class="text-blue-500 text-sm">Edit</button>
                        <button class="text-blue-500 text-sm ml-4">Add Photo</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    'Soil Health Report': `
        <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold">Soil Health Report</h2>
                <div>
                    <span class="text-sm text-gray-500 mr-2">Last Updated:</span>
                    <span class="font-medium">10 July 2023</span>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="col-span-2">
                    <div class="bg-white border rounded-lg p-4 mb-4">
                        <h3 class="font-semibold text-lg mb-4">Nutrient Analysis</h3>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="bg-green-50 rounded-lg p-4 text-center">
                                <div class="text-3xl font-bold text-green-600 mb-2">N</div>
                                <div class="text-sm text-gray-500">Nitrogen</div>
                                <div class="text-2xl font-semibold mt-2">280</div>
                                <div class="text-xs mt-1">kg/ha</div>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div class="bg-green-500 h-2 rounded-full" style="width: 70%"></div>
                                </div>
                                <div class="text-xs text-green-600 mt-1">Good</div>
                            </div>
                            
                            <div class="bg-yellow-50 rounded-lg p-4 text-center">
                                <div class="text-3xl font-bold text-yellow-600 mb-2">P</div>
                                <div class="text-sm text-gray-500">Phosphorus</div>
                                <div class="text-2xl font-semibold mt-2">18</div>
                                <div class="text-xs mt-1">kg/ha</div>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div class="bg-yellow-500 h-2 rounded-full" style="width: 40%"></div>
                                </div>
                                <div class="text-xs text-yellow-600 mt-1">Medium</div>
                            </div>
                            
                            <div class="bg-red-50 rounded-lg p-4 text-center">
                                <div class="text-3xl font-bold text-red-600 mb-2">K</div>
                                <div class="text-sm text-gray-500">Potassium</div>
                                <div class="text-2xl font-semibold mt-2">140</div>
                                <div class="text-xs mt-1">kg/ha</div>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div class="bg-red-500 h-2 rounded-full" style="width: 20%"></div>
                                </div>
                                <div class="text-xs text-red-600 mt-1">Low</div>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div class="border rounded-lg p-3">
                                <div class="text-sm text-gray-500">pH Level</div>
                                <div class="text-xl font-semibold">6.8</div>
                                <div class="text-xs text-green-600">Slightly Acidic</div>
                            </div>
                            
                            <div class="border rounded-lg p-3">
                                <div class="text-sm text-gray-500">Organic Carbon</div>
                                <div class="text-xl font-semibold">0.75%</div>
                                <div class="text-xs text-yellow-600">Medium</div>
                            </div>
                            
                            <div class="border rounded-lg p-3">
                                <div class="text-sm text-gray-500">Moisture</div>
                                <div class="text-xl font-semibold">22%</div>
                                <div class="text-xs text-green-600">Adequate</div>
                            </div>
                            
                            <div class="border rounded-lg p-3">
                                <div class="text-sm text-gray-500">Texture</div>
                                <div class="text-xl font-semibold">Loamy</div>
                                <div class="text-xs text-green-600">Good for most crops</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="bg-white border rounded-lg p-4 mb-4">
                        <h3 class="font-semibold text-lg mb-2">Recommendations</h3>
                        <div class="space-y-3">
                            <div class="p-3 bg-yellow-50 rounded-lg">
                                <h4 class="font-medium">Potassium Deficiency</h4>
                                <p class="text-sm text-gray-600 mt-1">Add potassium fertilizer at 60kg/ha before next planting.</p>
                            </div>
                            <div class="p-3 bg-green-50 rounded-lg">
                                <h4 class="font-medium">Crop Suitability</h4>
                                <p class="text-sm text-gray-600 mt-1">Soil suitable for wheat, rice, and maize. Avoid sugarcane in current conditions.</p>
                            </div>
                            <div class="p-3 bg-blue-50 rounded-lg">
                                <h4 class="font-medium">Organic Matter</h4>
                                <p class="text-sm text-gray-600 mt-1">Consider adding organic compost to improve soil structure.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center mt-4">
                        <button class="bg-blue-500 text-white rounded-lg px-4 py-3 w-full">
                            <i class="bi bi-download mr-2"></i> Download Full Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    'Get Loan': `
        <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold">Get Loan</h2>
                <div class="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium">
                    Credit Score: 720
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="col-span-2">
                    <form>
                        <div class="mb-6 p-4 bg-green-50 rounded-lg">
                            <h3 class="text-lg font-semibold mb-2">Personal Details</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                                    <input type="text" value="Rajesh Kumar Singh" class="w-full px-3 py-2 border rounded-lg" readonly>
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Aadhaar Number</label>
                                    <input type="text" value="XXXX-XXXX-1234" class="w-full px-3 py-2 border rounded-lg" readonly>
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Mobile Number</label>
                                    <input type="text" value="+91 98765-43210" class="w-full px-3 py-2 border rounded-lg" readonly>
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Age</label>
                                    <input type="text" value="45 years" class="w-full px-3 py-2 border rounded-lg" readonly>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-6 p-4 bg-blue-50 rounded-lg">
                            <h3 class="text-lg font-semibold mb-2">Farm Details</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Land Area</label>
                                    <input type="text" value="2.5 Acres" class="w-full px-3 py-2 border rounded-lg" readonly>
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Current Crop</label>
                                    <input type="text" value="Wheat" class="w-full px-3 py-2 border rounded-lg" readonly>
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Soil Type</label>
                                    <input type="text" value="Loamy" class="w-full px-3 py-2 border rounded-lg" readonly>
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Irrigation Source</label>
                                    <input type="text" value="Tube Well" class="w-full px-3 py-2 border rounded-lg" readonly>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-6 p-4 bg-yellow-50 rounded-lg">
                            <h3 class="text-lg font-semibold mb-2">Loan Details</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Loan Purpose</label>
                                    <select class="w-full px-3 py-2 border rounded-lg">
                                        <option>Crop Cultivation</option>
                                        <option>Equipment Purchase</option>
                                        <option>Land Development</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Loan Amount (₹)</label>
                                    <input type="number" placeholder="Enter amount" class="w-full px-3 py-2 border rounded-lg">
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Repayment Period</label>
                                    <select class="w-full px-3 py-2 border rounded-lg">
                                        <option>6 Months</option>
                                        <option>12 Months</option>
                                        <option>18 Months</option>
                                        <option>24 Months</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-medium mb-2">Required By Date</label>
                                    <input type="date" class="w-full px-3 py-2 border rounded-lg">
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <button type="submit" class="bg-green-500 text-white rounded-lg px-6 py-3 font-medium">
                                Submit Loan Application
                            </button>
                        </div>
                    </form>
                </div>
                
                <div>
                    <div class="bg-white border rounded-lg p-4 mb-4">
                        <h3 class="font-semibold text-lg mb-2">Eligible Loan Products</h3>
                        <div class="space-y-4 mt-4">
                            <div class="border border-green-200 p-3 rounded-lg bg-green-50">
                                <div class="flex justify-between items-center">
                                    <h4 class="font-medium">Kisan Credit Card</h4>
                                    <span class="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Recommended</span>
                                </div>
                                <div class="mt-2 text-sm space-y-1">
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Interest Rate:</span>
                                        <span class="font-medium">7% p.a.</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Max Amount:</span>
                                        <span class="font-medium">₹3,00,000</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Processing Fee:</span>
                                        <span class="font-medium">₹1,000</span>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <button class="text-sm text-blue-500">View Details</button>
                                </div>
                            </div>
                            
                            <div class="border p-3 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <h4 class="font-medium">FPO Member Loan</h4>
                                    <span class="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Special</span>
                                </div>
                                <div class="mt-2 text-sm space-y-1">
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Interest Rate:</span>
                                        <span class="font-medium">8% p.a.</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Max Amount:</span>
                                        <span class="font-medium">₹2,00,000</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Processing Fee:</span>
                                        <span class="font-medium">₹800</span>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <button class="text-sm text-blue-500">View Details</button>
                                </div>
                            </div>
                            
                            <div class="border p-3 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <h4 class="font-medium">Equipment Loan</h4>
                                </div>
                                <div class="mt-2 text-sm space-y-1">
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Interest Rate:</span>
                                        <span class="font-medium">9.5% p.a.</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Max Amount:</span>
                                        <span class="font-medium">₹5,00,000</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Processing Fee:</span>
                                        <span class="font-medium">₹2,500</span>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <button class="text-sm text-blue-500">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'Daily Prices': `
        <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold">Daily Market Prices</h2>
                <div class="flex items-center">
                    <span class="text-sm text-gray-500 mr-2">Your Location:</span>
                    <span class="font-medium">Kurukshetra, Haryana</span>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="col-span-2">
                    <div class="bg-white border rounded-lg p-4 mb-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="font-semibold text-lg">Wheat Prices (Per Quintal)</h3>
                            <div class="flex space-x-2">
                                <button class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Daily</button>
                                <button class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Weekly</button>
                                <button class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Monthly</button>
                            </div>
                        </div>
                        <div class="chart-container">
                            <div class="relative h-80 w-full py-2">
                                <div class="bg-blue-50 absolute bottom-0 left-0 right-0 h-full rounded-lg"></div>
                                <div class="relative h-full flex items-end justify-around px-2">
                                    <div class="flex flex-col items-center mb-2" style="height: 100%">
                                        <div class="bg-blue-500 w-12 rounded-t-lg" style="height: 65%"></div>
                                        <div class="text-xs mt-1">Mon</div>
                                        <div class="text-xs font-medium mt-1">₹2120</div>
                                    </div>
                                    <div class="flex flex-col items-center mb-2" style="height: 100%">
                                        <div class="bg-blue-500 w-12 rounded-t-lg" style="height: 70%"></div>
                                        <div class="text-xs mt-1">Tue</div>
                                        <div class="text-xs font-medium mt-1">₹2150</div>
                                    </div>
                                    <div class="flex flex-col items-center mb-2" style="height: 100%">
                                        <div class="bg-blue-500 w-12 rounded-t-lg" style="height: 68%"></div>
                                        <div class="text-xs mt-1">Wed</div>
                                        <div class="text-xs font-medium mt-1">₹2140</div>
                                    </div>
                                    <div class="flex flex-col items-center mb-2" style="height: 100%">
                                        <div class="bg-blue-500 w-12 rounded-t-lg" style="height: 72%"></div>
                                        <div class="text-xs mt-1">Thu</div>
                                        <div class="text-xs font-medium mt-1">₹2160</div>
                                    </div>
                                    <div class="flex flex-col items-center mb-2" style="height: 100%">
                                        <div class="bg-blue-500 w-12 rounded-t-lg" style="height: 80%"></div>
                                        <div class="text-xs mt-1">Fri</div>
                                        <div class="text-xs font-medium mt-1">₹2200</div>
                                    </div>
                                    <div class="flex flex-col items-center mb-2" style="height: 100%">
                                        <div class="bg-green-500 w-12 rounded-t-lg" style="height: 85%"></div>
                                        <div class="text-xs mt-1">Sat</div>
                                        <div class="text-xs font-medium mt-1">₹2230</div>
                                    </div>
                                    <div class="flex flex-col items-center mb-2" style="height: 100%">
                                        <div class="bg-green-500 w-12 rounded-t-lg" style="height: 82%"></div>
                                        <div class="text-xs mt-1">Sun</div>
                                        <div class="text-xs font-medium mt-1">₹2210</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mt-4 px-4 py-2 bg-green-50 rounded-lg">
                            <div>
                                <span class="text-sm text-gray-500">7-day Change:</span>
                                <span class="ml-2 text-green-600 font-medium">+₹90 (+4.2%)</span>
                            </div>
                            <div>
                                <span class="text-sm text-gray-500">Best Selling Day:</span>
                                <span class="ml-2 font-medium">Saturday</span>
                            </div>
                            <button class="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">Set Price Alert</button>
                        </div>
                    </div>
                    
                    <div class="bg-white border rounded-lg p-4">
                        <h3 class="font-semibold text-lg mb-4">Nearby Mandis</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mandi</th>
                                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
                                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₹/Q)</th>
                                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">vs Avg</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr class="bg-green-50">
                                        <td class="px-4 py-3 whitespace-nowrap">
                                            <div class="font-medium">Kurukshetra Mandi</div>
                                            <div class="text-sm text-gray-500">Open: 9am - 6pm</div>
                                        </td>
                                        <td class="px-4 py-3 whitespace-nowrap">5 km</td>
                                        <td class="px-4 py-3 whitespace-nowrap font-medium">₹2230</td>
                                        <td class="px-4 py-3 whitespace-nowrap text-green-600">+₹50</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-3 whitespace-nowrap">
                                            <div class="font-medium">Pipli Mandi</div>
                                            <div class="text-sm text-gray-500">Open: 8am - 5pm</div>
                                        </td>
                                        <td class="px-4 py-3 whitespace-nowrap">12 km</td>
                                        <td class="px-4 py-3 whitespace-nowrap font-medium">₹2180</td>
                                        <td class="px-4 py-3 whitespace-nowrap text-gray-600">+₹0</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-3 whitespace-nowrap">
                                            <div class="font-medium">Karnal Mandi</div>
                                            <div class="text-sm text-gray-500">Open: 9am - 7pm</div>
                                        </td>
                                        <td class="px-4 py-3 whitespace-nowrap">28 km</td>
                                        <td class="px-4 py-3 whitespace-nowrap font-medium">₹2210</td>
                                        <td class="px-4 py-3 whitespace-nowrap text-green-600">+₹30</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-3 whitespace-nowrap">
                                            <div class="font-medium">Ambala Mandi</div>
                                            <div class="text-sm text-gray-500">Open: 8am - 6pm</div>
                                        </td>
                                        <td class="px-4 py-3 whitespace-nowrap">35 km</td>
                                        <td class="px-4 py-3 whitespace-nowrap font-medium">₹2160</td>
                                        <td class="px-4 py-3 whitespace-nowrap text-red-600">-₹20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="bg-white border rounded-lg p-4 mb-4">
                        <h3 class="font-semibold text-lg mb-2">Other Crops</h3>
                        <div class="space-y-3 mt-4">
                            <div class="p-3 bg-white border rounded-lg flex justify-between items-center">
                                <div>
                                    <h4 class="font-medium">Paddy</h4>
                                    <p class="text-sm text-gray-600">Common Grade</p>
                                </div>
                                <div class="text-right">
                                    <div class="font-semibold">₹1950/Q</div>
                                    <div class="text-xs text-green-600">+1.8% ↑</div>
                                </div>
                            </div>
                            
                            <div class="p-3 bg-white border rounded-lg flex justify-between items-center">
                                <div>
                                    <h4 class="font-medium">Mustard</h4>
                                    <p class="text-sm text-gray-600">Yellow Grade</p>
                                </div>
                                <div class="text-right">
                                    <div class="font-semibold">₹4520/Q</div>
                                    <div class="text-xs text-red-600">-0.5% ↓</div>
                                </div>
                            </div>
                            
                            <div class="p-3 bg-white border rounded-lg flex justify-between items-center">
                                <div>
                                    <h4 class="font-medium">Maize</h4>
                                    <p class="text-sm text-gray-600">Average Quality</p>
                                </div>
                                <div class="text-right">
                                    <div class="font-semibold">₹1780/Q</div>
                                    <div class="text-xs text-green-600">+2.3% ↑</div>
                                </div>
                            </div>
                            
                            <div class="p-3 bg-white border rounded-lg flex justify-between items-center">
                                <div>
                                    <h4 class="font-medium">Cotton</h4>
                                    <p class="text-sm text-gray-600">Medium Staple</p>
                                </div>
                                <div class="text-right">
                                    <div class="font-semibold">₹6,250/Q</div>
                                    <div class="text-xs text-green-600">+3.1% ↑</div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <button class="text-blue-500 text-sm w-full text-center">View All Crops</button>
                        </div>
                    </div>
                    
                    <div class="bg-white border rounded-lg p-4">
                        <h3 class="font-semibold text-lg mb-2">Buyer Offers</h3>
                        <div class="space-y-3 mt-4">
                            <div class="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <div class="flex justify-between">
                                    <h4 class="font-medium">ITC Limited</h4>
                                    <span class="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">Premium</span>
                                </div>
                                <p class="text-sm text-gray-600 mt-1">Looking to buy Wheat (Min. 50Q)</p>
                                <div class="flex justify-between mt-2">
                                    <div class="text-sm">
                                        <span class="text-gray-500">Offering:</span>
                                        <span class="font-semibold ml-1">₹2280/Q</span>
                                    </div>
                                    <button class="text-blue-500 text-sm">Contact</button>
                                </div>
                            </div>
                            
                            <div class="p-3 bg-white border rounded-lg">
                                <div class="flex justify-between">
                                    <h4 class="font-medium">Local Mill</h4>
                                    <span class="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Negotiable</span>
                                </div>
                                <p class="text-sm text-gray-600 mt-1">Wheat required urgently</p>
                                <div class="flex justify-between mt-2">
                                    <div class="text-sm">
                                        <span class="text-gray-500">Offering:</span>
                                        <span class="font-semibold ml-1">₹2200/Q</span>
                                    </div>
                                    <button class="text-blue-500 text-sm">Contact</button>
                                </div>
                            </div>
                            
                            <div class="text-center mt-4">
                                <button class="bg-blue-500 text-white rounded-lg px-4 py-2 w-full">
                                    Sell Your Produce Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'View Schemes': `
        <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold">Government Schemes</h2>
                <div>
                    <span class="text-sm text-gray-500 mr-2">Category:</span>
                    <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Small Farmer</span>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="col-span-2">
                    <div class="mb-4">
                        <div class="relative">
                            <input type="text" placeholder="Search schemes..." class="w-full px-4 py-3 pl-10 border rounded-lg">
                            <i class="bi bi-search absolute left-3 top-3 text-gray-400"></i>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-3">
                            <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">All</span>
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Subsidies</span>
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Credit</span>
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Insurance</span>
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Income Support</span>
                        </div>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <div class="flex items-start justify-between">
                                <div>
                                    <div class="flex items-center">
                                        <h3 class="font-semibold text-lg">PM-KISAN</h3>
                                        <span class="ml-2 bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">Eligible</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mt-1">Direct income support of ₹6,000 per year in three installments</p>
                                </div>
                                <div class="bg-white rounded-full p-2">
                                    <img src="https://source.unsplash.com/random/40x40/?government,india" alt="PM-KISAN logo" class="w-10 h-10 rounded-full">
                                </div>
                            </div>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm">
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Next Installment:</span>
                                    <div class="font-medium">₹2,000</div>
                                </div>
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Payment Date:</span>
                                    <div class="font-medium">30 Aug 2023</div>
                                </div>
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Status:</span>
                                    <div class="font-medium">Registered</div>
                                </div>
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Applied on:</span>
                                    <div class="font-medium">15 May 2023</div>
                                </div>
                            </div>
                            <div class="mt-4 flex justify-between">
                                <button class="text-blue-500 text-sm">View Details</button>
                                <button class="bg-green-500 text-white rounded-lg px-4 py-2 text-sm">Track Payment</button>
                            </div>
                        </div>
                        
                        <div class="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                            <div class="flex items-start justify-between">
                                <div>
                                    <div class="flex items-center">
                                        <h3 class="font-semibold text-lg">Soil Health Card Scheme</h3>
                                        <span class="ml-2 bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full">Apply Now</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mt-1">Free soil testing and recommendations for nutrients and fertilizers</p>
                                </div>
                                <div class="bg-white rounded-full p-2">
                                    <img src="https://source.unsplash.com/random/40x40/?soil,agriculture" alt="Soil Health Card logo" class="w-10 h-10 rounded-full">
                                </div>
                            </div>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm">
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Application Fee:</span>
                                    <div class="font-medium">Free</div>
                                </div>
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Next Camp:</span>
                                    <div class="font-medium">10 Aug 2023</div>
                                </div>
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Testing Time:</span>
                                    <div class="font-medium">~7 days</div>
                                </div>
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Validity:</span>
                                    <div class="font-medium">3 Years</div>
                                </div>
                            </div>
                            <div class="mt-4 flex justify-between">
                                <button class="text-blue-500 text-sm">View Details</button>
                                <button class="bg-yellow-500 text-white rounded-lg px-4 py-2 text-sm">Apply Now</button>
                            </div>
                        </div>
                        
                        <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                            <div class="flex items-start justify-between">
                                <div>
                                    <div class="flex items-center">
                                        <h3 class="font-semibold text-lg">Pradhan Mantri Fasal Bima Yojana</h3>
                                        <span class="ml-2 bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">Ongoing</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mt-1">Crop insurance scheme with low premium rates</p>
                                </div>
                                <div class="bg-white rounded-full p-2">
                                    <img src="https://source.unsplash.com/random/40x40/?insurance,agriculture" alt="PMFBY logo" class="w-10 h-10 rounded-full">
                                </div>
                            </div>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm">
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Premium:</span>
                                    <div class="font-medium">₹850/Hectare</div>
                                </div>
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Coverage:</span>
                                    <div class="font-medium">₹35,000/Hectare</div>
                                </div>
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Current Status:</span>
                                    <div class="font-medium">Insured</div>
                                </div>
                                <div class="bg-white p-2 rounded">
                                    <span class="text-gray-500">Valid Until:</span>
                                    <div class="font-medium">Dec 2023</div>
                                </div>
                            </div>
                            <div class="mt-4 flex justify-between">
                                <button class="text-blue-500 text-sm">View Details</button>
                                <button class="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm">File Claim</button>
                            </div>
                        </div>
                        
                        <div class="bg-white border p-4 rounded-lg">
                            <div class="flex items-start justify-between">
                                <div>
                                    <div class="flex items-center">
                                        <h3 class="font-semibold text-lg">PM Kisan Maandhan Yojana</h3>
                                        <span class="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">Pension</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mt-1">Pension scheme for small and marginal farmers</p>
                                </div>
                                <div class="bg-gray-100 rounded-full p-2">
                                    <img src="https://source.unsplash.com/random/40x40/?pension,elderly" alt="PMKMY logo" class="w-10 h-10 rounded-full">
                                </div>
                            </div>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm">
                                <div class="bg-gray-50 p-2 rounded">
                                    <span class="text-gray-500">Monthly Pension:</span>
                                    <div class="font-medium">₹3,000</div>
                                </div>
                                <div class="bg-gray-50 p-2 rounded">
                                    <span class="text-gray-500">Entry Age:</span>
                                    <div class="font-medium">18-40 yrs</div>
                                </div>
                                <div class="bg-gray-50 p-2 rounded">
                                    <span class="text-gray-500">Eligibility:</span>
                                    <div class="font-medium">Eligible</div>
                                </div>
                                <div class="bg-gray-50 p-2 rounded">
                                    <span class="text-gray-500">Contribution:</span>
                                    <div class="font-medium">₹55-200/month</div>
                                </div>
                            </div>
                            <div class="mt-4 flex justify-between">
                                <button class="text-blue-500 text-sm">Learn More</button>
                                <button class="bg-gray-500 text-white rounded-lg px-4 py-2 text-sm">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="bg-white border rounded-lg p-4 mb-4">
                        <h3 class="font-semibold text-lg mb-2">Your Status</h3>
                        <div class="space-y-3 mt-4">
                            <div class="flex items-center p-3 bg-green-50 rounded-lg">
                                <div class="rounded-full bg-green-100 p-2 mr-3">
                                    <i class="bi bi-check-circle text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium">2 Active Schemes</h4>
                                    <p class="text-xs text-gray-600">PM-KISAN, PMFBY</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center p-3 bg-yellow-50 rounded-lg">
                                <div class="rounded-full bg-yellow-100 p-2 mr-3">
                                    <i class="bi bi-hourglass-split text-yellow-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium">1 Pending Application</h4>
                                    <p class="text-xs text-gray-600">KCC Renewal</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center p-3 bg-blue-50 rounded-lg">
                                <div class="rounded-full bg-blue-100 p-2 mr-3">
                                    <i class="bi bi-bell text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium">3 Recommended Schemes</h4>
                                    <p class="text-xs text-gray-600">Based on your profile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white border rounded-lg p-4">
                        <h3 class="font-semibold text-lg mb-2">Documents Required</h3>
                        <div class="space-y-2 mt-4">
                            <div class="flex items-center justify-between p-2">
                                <div class="flex items-center">
                                    <i class="bi bi-file-earmark-text text-gray-500 mr-2"></i>
                                    <span>Aadhaar Card</span>
                                </div>
                                <span class="text-green-600 text-sm">Uploaded</span>
                            </div>
                            
                            <div class="flex items-center justify-between p-2">
                                <div class="flex items-center">
                                    <i class="bi bi-file-earmark-text text-gray-500 mr-2"></i>
                                    <span>Land Records</span>
                                </div>
                                <span class="text-green-600 text-sm">Uploaded</span>
                            </div>
                            
                            <div class="flex items-center justify-between p-2">
                                <div class="flex items-center">
                                    <i class="bi bi-file-earmark-text text-gray-500 mr-2"></i>
                                    <span>Bank Account Details</span>
                                </div>
                                <span class="text-green-600 text-sm">Uploaded</span>
                            </div>
                            
                            <div class="flex items-center justify-between p-2">
                                <div class="flex items-center">
                                    <i class="bi bi-file-earmark-text text-gray-500 mr-2"></i>
                                    <span>Income Certificate</span>
                                </div>
                                <span class="text-red-600 text-sm">Missing</span>
                            </div>
                            
                            <div class="mt-4">
                                <button class="bg-blue-500 text-white rounded-lg px-4 py-2 w-full">
                                    Upload Missing Documents
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'Join FPO': `
        <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold">Join Farmer Producer Organizations</h2>
                <div class="bg-green-100 text-green-800 rounded-lg px-4 py-2 text-sm font-medium">
                    <i class="bi bi-geo-alt mr-1"></i> Kurukshetra, Haryana
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="col-span-2">
                    <div class="bg-white border rounded-lg p-4 mb-6">
                        <h3 class="text-lg font-semibold mb-4">Nearby FPOs</h3>
                        <div class="space-y-4">
                            <div class="border border-green-200 rounded-lg p-4 bg-green-50">
                                <div class="flex items-start justify-between">
                                    <div>
                                        <div class="flex items-center">
                                            <h4 class="text-lg font-semibold">Kurukshetra Kisan Samriddhi FPO</h4>
                                            <span class="ml-2 bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">Popular</span>
                                        </div>
                                        <p class="text-sm text-gray-600 mt-1">A collective of 350+ wheat and rice farmers with focus on market access</p>
                                    </div>
                                    <div class="bg-white rounded-full p-2">
                                        <img src="https://source.unsplash.com/random/60x60/?farming,cooperative" alt="FPO logo" class="w-14 h-14 rounded-full object-cover">
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm">
                                    <div class="bg-white p-2 rounded">
                                        <span class="text-gray-500">Members:</span>
                                        <div class="font-medium">350+</div>
                                    </div>
                                    <div class="bg-white p-2 rounded">
                                        <span class="text-gray-500">Established:</span>
                                        <div class="font-medium">2018</div>
                                    </div>
                                    <div class="bg-white p-2 rounded">
                                        <span class="text-gray-500">Share Value:</span>
                                        <div class="font-medium">₹1,000</div>
                                    </div>
                                    <div class="bg-white p-2 rounded">
                                        <span class="text-gray-500">Distance:</span>
                                        <div class="font-medium">4.5 km</div>
                                    </div>
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <button class="text-blue-500">View Details</button>
                                    <button class="bg-green-500 text-white px-4 py-2 rounded-lg">Join Now</button>
                                </div>
                            </div>
                            
                            <div class="border rounded-lg p-4">
                                <div class="flex items-start justify-between">
                                    <div>
                                        <div class="flex items-center">
                                            <h4 class="text-lg font-semibold">Haryana Organic Farmers Collective</h4>
                                        </div>
                                        <p class="text-sm text-gray-600 mt-1">Focused on organic certification and premium markets for fruits and vegetables</p>
                                    </div>
                                    <div class="bg-gray-100 rounded-full p-2">
                                        <img src="https://source.unsplash.com/random/60x60/?organic,farming" alt="FPO logo" class="w-14 h-14 rounded-full object-cover">
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm">
                                    <div class="bg-gray-50 p-2 rounded">
                                        <span class="text-gray-500">Members:</span>
                                        <div class="font-medium">120</div>
                                    </div>
                                    <div class="bg-gray-50 p-2 rounded">
                                        <span class="text-gray-500">Established:</span>
                                        <div class="font-medium">2020</div>
                                    </div>
                                    <div class="bg-gray-50 p-2 rounded">
                                        <span class="text-gray-500">Share Value:</span>
                                        <div class="font-medium">₹1,500</div>
                                    </div>
                                    <div class="bg-gray-50 p-2 rounded">
                                        <span class="text-gray-500">Distance:</span>
                                        <div class="font-medium">12 km</div>
                                    </div>
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <button class="text-blue-500">View Details</button>
                                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Join Now</button>
                                </div>
                            </div>
                            
                            <div class="border rounded-lg p-4">
                                <div class="flex items-start justify-between">
                                    <div>
                                        <div class="flex items-center">
                                            <h4 class="text-lg font-semibold">Dairy Farmers Cooperative</h4>
                                            <span class="ml-2 bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">Specialized</span>
                                        </div>
                                        <p class="text-sm text-gray-600 mt-1">Dairy cooperative focused on milk collection, processing and marketing</p>
                                    </div>
                                    <div class="bg-gray-100 rounded-full p-2">
                                        <img src="https://source.unsplash.com/random/60x60/?dairy,milk" alt="FPO logo" class="w-14 h-14 rounded-full object-cover">
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm">
                                    <div class="bg-gray-50 p-2 rounded">
                                        <span class="text-gray-500">Members:</span>
                                        <div class="font-medium">210</div>
                                    </div>
                                    <div class="bg-gray-50 p-2 rounded">
                                        <span class="text-gray-500">Established:</span>
                                        <div class="font-medium">2015</div>
                                    </div>
                                    <div class="bg-gray-50 p-2 rounded">
                                        <span class="text-gray-500">Share Value:</span>
                                        <div class="font-medium">₹2,000</div>
                                    </div>
                                    <div class="bg-gray-50 p-2 rounded">
                                        <span class="text-gray-500">Distance:</span>
                                        <div class="font-medium">18 km</div>
                                    </div>
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <button class="text-blue-500">View Details</button>
                                    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="bg-white border rounded-lg p-4 mb-4">
                        <h3 class="font-semibold text-lg mb-3">Benefits of FPO Membership</h3>
                        <div class="space-y-3">
                            <div class="flex items-center">
                                <div class="bg-green-100 rounded-full p-2 mr-3">
                                    <i class="bi bi-cart text-green-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium">Bulk Input Purchase</h4>
                                    <p class="text-xs text-gray-600">Save 10-15% on seeds, fertilizers</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center">
                                <div class="bg-blue-100 rounded-full p-2 mr-3">
                                    <i class="bi bi-cash-stack text-blue-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium">Better Market Prices</h4>
                                    <p class="text-xs text-gray-600">Collective bargaining power</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center">
                                <div class="bg-purple-100 rounded-full p-2 mr-3">
                                    <i class="bi bi-gear text-purple-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium">Access to Equipment</h4>
                                    <p class="text-xs text-gray-600">Shared machinery and equipment</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center">
                                <div class="bg-yellow-100 rounded-full p-2 mr-3">
                                    <i class="bi bi-bank text-yellow-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium">Credit & Finance</h4>
                                    <p class="text-xs text-gray-600">Better loan terms for FPO members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white border rounded-lg p-4">
                        <h3 class="font-semibold text-lg mb-3">Membership Process</h3>
                        <ol class="space-y-3 pl-2">
                            <li class="flex items-start">
                                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
                                <div>
                                    <p class="font-medium">Fill online application</p>
                                    <p class="text-xs text-gray-600">Basic details and farm information</p>
                                </div>
                            </li>
                            
                            <li class="flex items-start">
                                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
                                <div>
                                    <p class="font-medium">Document verification</p>
                                    <p class="text-xs text-gray-600">Land records and ID proof</p>
                                </div>
                            </li>
                            
                            <li class="flex items-start">
                                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</span>
                                <div>
                                    <p class="font-medium">Pay share capital</p>
                                    <p class="text-xs text-gray-600">One-time membership fee</p>
                                </div>
                            </li>
                            
                            <li class="flex items-start">
                                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">4</span>
                                <div>
                                    <p class="font-medium">Receive membership</p>
                                    <p class="text-xs text-gray-600">Membership certificate and ID</p>
                                </div>
                            </li>
                        </ol>
                        <div class="mt-4">
                            <button class="w-full bg-green-500 text-white rounded-lg py-3">
                                Create Your Own FPO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    'Dial Interface': `
        <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold">Voice Assistant</h2>
                <div class="bg-orange-100 text-orange-800 rounded-lg px-3 py-1 text-sm font-medium">
                    <i class="bi bi-telephone-fill mr-1"></i> Toll Free: 1800-XXX-XXXX
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="col-span-2">
                    <div class="bg-gray-50 rounded-lg p-6">
                        <div class="relative w-full max-w-xs mx-auto">
                            <img src="https://source.unsplash.com/random/300x600/?phone,smartphone" alt="Phone" class="w-full rounded-3xl shadow-lg">
                            <div class="absolute inset-0 flex flex-col items-center justify-center p-8">
                                <div class="w-full h-32 bg-gray-800 rounded-xl mb-4 p-4 text-white">
                                    <div class="text-center">
                                        <div class="text-green-400 text-sm mb-1">
                                            <i class="bi bi-telephone-outbound"></i> Calling...
                                        </div>
                                        <div class="font-bold text-lg mb-1">Agri-Intelligence</div>
                                        <div class="text-gray-400 text-sm">1800-XXX-XXXX</div>
                                    </div>
                                    <div class="flex justify-center mt-4">
                                        <button class="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                                            <i class="bi bi-telephone-x"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                <div class="bg-white rounded-xl p-4 w-full shadow-md">
                                    <div class="text-center mb-3">
                                        <p class="font-medium text-gray-800">नमस्ते! किस विषय में मदद चाहिए?</p>
                                        <p class="text-sm text-gray-600">Hello! How can I help you today?</p>
                                    </div>
                                    <div class="grid grid-cols-2 gap-2 text-sm">
                                        <button class="bg-blue-50 text-blue-700 p-2 rounded flex flex-col items-center">
                                            <i class="bi bi-cloud-sun text-xl mb-1"></i>
                                            <span>1. मौसम</span>
                                            <span class="text-xs">(Weather)</span>
                                        </button>
                                        <button class="bg-green-50 text-green-700 p-2 rounded flex flex-col items-center">
                                            <i class="bi bi-cash text-xl mb-1"></i>
                                            <span>2. लोन</span>
                                            <span class="text-xs">(Loan)</span>
                                        </button>
                                        <button class="bg-purple-50 text-purple-700 p-2 rounded flex flex-col items-center">
                                            <i class="bi bi-building text-xl mb-1"></i>
                                            <span>3. योजना</span>
                                            <span class="text-xs">(Schemes)</span>
                                        </button>
                                        <button class="bg-yellow-50 text-yellow-700 p-2 rounded flex flex-col items-center">
                                            <i class="bi bi-flower1 text-xl mb-1"></i>
                                            <span>4. कृषि सलाह</span>
                                            <span class="text-xs">(Farm Advice)</span>
                                        </button>
                                        <button class="bg-red-50 text-red-700 p-2 rounded flex flex-col items-center col-span-2">
                                            <i class="bi bi-tag text-xl mb-1"></i>
                                            <span>5. बाज़ार भाव</span>
                                            <span class="text-xs">(Market Prices)</span>
                                        </button>
                                    </div>
                                    <div class="mt-3 flex justify-center">
                                        <button class="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-xs">
                                            <i class="bi bi-mic-fill mr-1"></i> Or speak directly
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="bg-white border rounded-lg p-4 mb-4">
                        <h3 class="font-semibold text-lg mb-3">How It Works</h3>
                        <ol class="space-y-4">
                            <li class="flex">
                                <div class="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                                    <span class="text-orange-600 font-bold">1</span>
                                </div>
                                <div>
                                    <p class="font-medium">Call the toll-free number</p>
                                    <p class="text-sm text-gray-600">Works on any basic phone, no internet needed</p>
                                </div>
                            </li>
                            
                            <li class="flex">
                                <div class="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                                    <span class="text-orange-600 font-bold">2</span>
                                </div>
                                <div>
                                    <p class="font-medium">Choose your language</p>
                                    <p class="text-sm text-gray-600">Available in 10+ Indian languages</p>
                                </div>
                            </li>
                            
                            <li class="flex">
                                <div class="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                                    <span class="text-orange-600 font-bold">3</span>
                                </div>
                                <div>
                                    <p class="font-medium">Select service or ask directly</p>
                                    <p class="text-sm text-gray-600">Use keypad or voice commands</p>
                                </div>
                            </li>
                            
                            <li class="flex">
                                <div class="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                                    <span class="text-orange-600 font-bold">4</span>
                                </div>
                                <div>
                                    <p class="font-medium">Get instant information</p>
                                    <p class="text-sm text-gray-600">Receive accurate, personalized answers</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                    
                    <div class="bg-white border rounded-lg p-4">
                        <h3 class="font-semibold text-lg mb-3">Available Services</h3>
                        <div class="space-y-3">
                            <div class="flex items-center p-2 rounded-lg hover:bg-gray-50">
                                <div class="bg-blue-100 p-2 rounded-lg mr-3">
                                    <i class="bi bi-cloud-drizzle text-blue-600"></i>
                                </div>
                                <div>
                                    <p class="font-medium">Weather Forecasts</p>
                                    <p class="text-xs text-gray-600">Local & 7-day predictions</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center p-2 rounded-lg hover:bg-gray-50">
                                <div class="bg-green-100 p-2 rounded-lg mr-3">
                                    <i class="bi bi-piggy-bank text-green-600"></i>
                                </div>
                                <div>
                                    <p class="font-medium">Loan & KCC Status</p>
                                    <p class="text-xs text-gray-600">Check application progress</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center p-2 rounded-lg hover:bg-gray-50">
                                <div class="bg-purple-100 p-2 rounded-lg mr-3">
                                    <i class="bi bi-building text-purple-600"></i>
                                </div>
                                <div>
                                    <p class="font-medium">Scheme Information</p>
                                    <p class="text-xs text-gray-600">Eligibility & application help</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center p-2 rounded-lg hover:bg-gray-50">
                                <div class="bg-yellow-100 p-2 rounded-lg mr-3">
                                    <i class="bi bi-shop text-yellow-600"></i>
                                </div>
                                <div>
                                    <p class="font-medium">Market Prices</p>
                                    <p class="text-xs text-gray-600">Today's rates at nearby mandis</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center p-2 rounded-lg hover:bg-gray-50">
                                <div class="bg-red-100 p-2 rounded-lg mr-3">
                                    <i class="bi bi-bug text-red-600"></i>
                                </div>
                                <div>
                                    <p class="font-medium">Pest & Disease Support</p>
                                    <p class="text-xs text-gray-600">Identify & get treatment advice</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <button class="w-full bg-orange-500 text-white rounded-lg py-3 font-medium">
                                <i class="bi bi-telephone-outbound mr-2"></i> Call Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};
