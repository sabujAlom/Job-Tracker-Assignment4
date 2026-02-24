 let jobs = [
        {
          id: 1,
          company: "AutoTech",
          position: "Frontend Developer",
          location: "Dhaka",
          type: "Full Time",
          salary: "60k",
          description:
            "Build cross-platform mobile applications using React Native.",
          status: null,
        },
        {
          id: 2,
          company: "Microsoft",
          position: "Backend Engineer",
          location: "Remote",
          type: "Full Time",
          salary: "70k",
          description:
            "Design and maintain scalable backend systems using Python and AWS.",
          status: null,
        },
        {
          id: 3,
          company: "Amazon",
          position: "Cloud Engineer",
          location: "USA",
          type: "Full Time",
          salary: "75k",
          description:
            "Create intuitive and responsive designs for web and mobile apps.",
          status: null,
        },
        {
          id: 4,
          company: "Tesla",
          position: "Software Engineer",
          location: "USA",
          type: "Full Time",
          salary: "80k",
          description:
            "Analyze datasets and generate insights for business decisions.",
          status: null,
        },
        {
          id: 5,
          company: "Meta",
          position: "React Developer",
          location: "Dhaka",
          type: "Contract",
          salary: "65k",
          description:
            "Build cross-platform mobile applications using React Native.",
          status: null,
        },
        {
          id: 6,
          company: "Netflix",
          position: "UI Designer",
          location: "Remote",
          type: "Full Time",
          salary: "55k",
          description:
            "Work on cutting-edge web applications using React and Tailwind CSS.",
          status: null,
        },
        {
          id: 7,
          company: "Adobe",
          position: "JavaScript Developer",
          location: "Remote",
          type: "Part Time",
          salary: "50k",
          description:
            "Analyze datasets and generate insights for business decisions.",
          status: null,
        },
        {
          id: 8,
          company: "Spotify",
          position: "App Developer",
          location: "Sweden",
          type: "Full Time",
          salary: "92k",
          description:
            "Build cross-platform mobile applications using React Native.",
          status: null,
        },
        {
          id: 9,
          company: "EduTech",
          position: "App Developer",
          location: "Sweden",
          type: "Full Time",
          salary: "62k",
          description:
            "Create intuitive and responsive designs for web and mobile apps.",
          status: null,
        },
        {
          id: 10,
          company: "GreenEnergy",
          position: "App Developer",
          location: "Sweden",
          type: "Full Time",
          salary: "82k",
          description:
            "Build cross-platform mobile applications using React Native.",
          status: null,
        },
        {
          id: 11,
          company: "DataSolutions",
          position: "App Developer",
          location: "Sweden",
          type: "Full Time",
          salary: "52k",
          description:
            "Test and ensure the quality of web and mobile healthcare applications.",
          status: null,
        },
        {
          id: 12,
          company: "DesignHive",
          position: "App Developer",
          location: "Sweden",
          type: "Full Time",
          salary: "66k",
          description: "Improve music platform.",
          status: null,
        },
        {
          id: 13,
          company: "FinTech Solutions",
          position: "App Developer",
          location: "Sweden",
          type: "Full Time",
          salary: "77k",
          description: "Improve music platform.",
          status: null,
        },
        {
          id: 14,
          company: "TechCorp",
          position: "App Developer",
          location: "Sweden",
          type: "Full Time",
          salary: "92k",
          description:
            "Test and ensure the quality of web and mobile healthcare applications.",
          status: null,
        },
        {
          id: 15,
          company: "Google",
          position: "App Developer",
          location: "Sweden",
          type: "Full Time",
          salary: "102k",
          description:
            "Assist in designing automotive components and prototype testing.",
          status: null,
        },
      ];

      
       let currentTab = "all";

       function renderJobs(){
        const container = document.getElementById("jobContainer");
        container.innerHTML = "";

        let filteredJobs;

        if (currentTab === "all") {
          filteredJobs = jobs;
        } else {
          filteredJobs = jobs.filter((job) => job.status === currentTab);
        }

         document.getElementById("sectionCount").innerText =
          filteredJobs.length + " Jobs";


          if (filteredJobs.length === 0) {
          container.innerHTML = `
           <div class="col-span-2 bg-white p-10 rounded-xl shadow text-center">
           <div class="mb-4 flex justify-center items-center"><img src="./images/jobs.png" alt="loding..."></div>
           <h3 class="text-2xl font-semibold">No jobs available</h3>
           <p class="text-gray-500">Check back soon for new job opportunities</p>
          </div>
          `;
          updateDashboard();
          return;
        }

       }