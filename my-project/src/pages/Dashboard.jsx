import React from "react";

const Dashboard = () => {
  return (
    <main className="flex-1 bg-gray-100 p-8">
    <h2 className="text-2xl text-center justify-center font-semibold mb-4">Dashboard Portal</h2>
    <p className='text-center justify-center'>Welcome to Dashboard Portal</p>
      <body>
      <div class="container mt-3">
    <h1>Available Course's</h1>
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="card course-card bg-gray-200 shadow-md rounded-lg hover:bg-gray-300 cursor-pointer">
          <div class="card-body">
            <h5 class="card-title text-lg font-bold">Bachelor of Science in Tourism</h5>
            <p class="card-text text-gray-700">This degree prepares students for careers in the hospitality industry like being a flight attendant. Students in this course learn about management principles in the tourism industry, history and culture, customer service, risk management, as well as the legal aspects of tourism.</p>
          </div>
          <div class="card-body">
            <h5 class="card-title text-lg font-bold">Bachelor of Science in Information Technology</h5>
            <p class="card-text text-gray-700">BSIT graduates possess excellent technical, management, and soft skills, making them suited to pursue careers as system administrators, network engineers, information security practitioners, technology consultants, and enterprise system specialists.</p>
          </div>
          <div class="card-body">
            <h5 class="card-title text-lg font-bold">Bachelor of Science in Nursing</h5>
            <p class="card-text text-gray-700">(BSN) is a four-year program consisting of general education, major and professional nursing courses. The professional courses are embedded from the first to the fourth year with emphasis on nursing concepts with corresponding related learning experiences (RLEs).</p>
          </div>
        </div>
      </div>
      </div>
      
  </div>
      </body>
    
</main>
  );
};

export default Dashboard;