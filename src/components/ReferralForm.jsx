import React, { useState } from "react";
import refer_and_earn from "../assets/refer_and_earn.jpg";

const ReferralForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    referredProgram: "",
  });

  const courseOptions = [
    "Certified Human Resource Professional (CHRP)",
    "SHRM Certified Professional (SHRM-CP)",
    "People Analytics & HR Data Science",
    "Talent Acquisition & Recruitment Strategies",
    "HR Business Partner Certification",
    "MERN Stack Bootcamp",
    "Full Stack Development",
    "Data Science & AI",
    "Cyber Security",
    "Cloud Computing",
    "UI/UX Design",
    "Diversity, Equity & Inclusion (DEI) Certification",
    "Employee Experience & Engagement",
    "HR Digital Transformation"];

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_API_URL}/api/referral`
    console.log(url)
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(response)
      const data = await response.json();
      if (response.ok) {
        alert("Referral submitted successfully!");
        onClose(); // Close modal after submission
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
      alert("Error submitting referral. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 mt-4">
      <h2 className="block md:hidden text-3xl font-bold text-center text-[#1A202C]">
        Refer a <span className="text-blue-600">Friend</span>
      </h2>
      <img
        src={refer_and_earn}
        className="hidden md:block md:w-[520px] md:h-[380px]"
        alt="refer_and_earn"
      />
      <div className="flex flex-col justify-center items-center">
        <h2 className="hidden md:block md:text-3xl md:font-bold md:text-center md:text-[#1A202C]">
          Refer a <span className="text-blue-600">Friend</span>
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center gap-10 mt-5"
        >
          {/* Left Column (Referee Details) */}
          <div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-600 font-semibold">Referee Name</label>
              <input
                type="text"
                name="refereeName"
                placeholder="Enter your friend's name"
                value={formData.refereeName}
                onChange={handleChange}
                required
                className="border border-gray-300 py-2 px-8 pl-2 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-gray-600 font-semibold">Referee Email</label>
              <input
                type="email"
                name="refereeEmail"
                placeholder="Enter your friend's email"
                value={formData.refereeEmail}
                onChange={handleChange}
                required
                className="border border-gray-300 py-2 px-8 pl-2 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-gray-600 font-semibold">Referee Phone</label>
              <input
                type="text"
                name="refereePhone"
                placeholder="Enter your friend's phone number"
                value={formData.refereePhone}
                onChange={handleChange}
                required
                className="border border-gray-300 py-2 px-8 pl-2 rounded-md"
              />
            </div>
          </div>

          {/* Right Column (Referrer Details) */}
          <div>
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-gray-600 font-semibold">Your Name (Referrer)</label>
              <input
                type="text"
                name="referrerName"
                placeholder="Enter your name"
                value={formData.referrerName}
                onChange={handleChange}
                required
                className="border border-gray-300 py-2 px-8 pl-2 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-gray-600 font-semibold">Your Email</label>
              <input
                type="email"
                name="referrerEmail"
                placeholder="Enter your email"
                value={formData.referrerEmail}
                onChange={handleChange}
                required
                className="border border-gray-300 py-2 px-8 pl-2 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-gray-600 font-semibold">Your Phone</label>
              <input
                type="text"
                name="referrerPhone"
                placeholder="Enter your phone number"
                value={formData.referrerPhone}
                onChange={handleChange}
                required
                className="border border-gray-300 py-2 px-8 pl-2 rounded-md"
              />
            </div>

            {/* Select Field for Referred Program */}
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-gray-600 font-semibold">Referred Program</label>
              <select
                name="referredProgram"
                value={formData.referredProgram}
                onChange={handleChange}
                required
                className="border border-gray-300 py-2 px-8 pl-2 rounded-md"
              >
                <option value="" disabled>
                  Select a course
                </option>
                {courseOptions.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg-[#1A73E8] text-white w-full px-8 py-2 rounded-md mt-5"
            >
              Refer Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;
