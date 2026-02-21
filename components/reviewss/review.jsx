"use client";
import { useState, useEffect } from "react";

export default function ReviewSection() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [avg, setAvg] = useState(0);
  const [total, setTotal] = useState(0);

  // Fetch reviews
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setAvg(data.avg);
        setTotal(data.total);
      });
  }, []);

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating, comment }),
    });

    const res = await fetch("/api/reviews");
    const data = await res.json();
    setReviews(data.reviews);
    setAvg(data.avg);
    setTotal(data.total);
    setRating(5);
    setComment("");
  };

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-16 px-6 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        🌟 Reviews & Ratings
      </h2>

      {/* Average Score */}
      <div className="text-center mb-8">
        <p className="text-2xl font-semibold">
          Average Score: <span className="text-yellow-400">{avg}</span> / 10
        </p>
        <div className="relative w-64 h-3 mx-auto mt-3 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
            style={{ width: `${(avg / 10) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-400 mt-2">{total} reviews submitted</p>
      </div>

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        {/* Slider */}
        <label className="block mb-4 text-lg">
          Rate Me: <span className="text-yellow-400">{rating}/10</span>
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full accent-blue-500 cursor-pointer"
        />

        {/* Comment */}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a review..."
          className="w-full p-3 mt-4 rounded-md text-black"
        />

        <button
          type="submit"
          className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 py-2 rounded-lg font-medium hover:opacity-90 transition"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      <div className="mt-12 max-w-2xl mx-auto grid gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-gray-700 to-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <p className="text-yellow-400 font-bold">{r.rating}/10</p>
            <p className="text-gray-200">{r.comment || "No comment"}</p>
            <p className="text-xs text-gray-400 mt-2">
              {new Date(r.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
