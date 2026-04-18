import React from 'react'

const ReviewSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [feedback, setFeedback] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ rating, feedback });
      setIsOpen(false);
      setRating(0);
      setFeedback("");
    };

  return (
    <section className="py-10 px-4">
      {/* Write Review Button */}
      <div className="text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-green-900 text-white px-6 py-2 hover:bg-green-800"
        >
          ✍️ Write Review
        </button>
      </div>

      {/* Feedback Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-semibold text-center mb-2">Feedback</h2>
            <p className="text-gray-600 text-center mb-4">
              Please rate your experience below
            </p>

            {/* Rating Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      className="hidden"
                    />
                    <FaStar
                      size={30}
                      className="cursor-pointer transition-colors"
                      color={
                        ratingValue <= (hover || rating)
                          ? "#fbbf24"
                          : "#e4e5e9"
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>

            {/* Feedback Textarea */}
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Write review
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full border rounded-md p-2 mb-4"
                placeholder="My feedback!!"
                rows={4}
                required
              />

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-gray-200 rounded-md py-2 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-900 text-white rounded-md py-2 hover:bg-green-800"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default ReviewSection
