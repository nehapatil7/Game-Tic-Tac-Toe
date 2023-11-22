import React, { useEffect, useState } from "react";
import axios from "axios";

function Quote() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(
    parseInt(localStorage.getItem("currentIndex")) || 1
  ); // starting index
  const [isError, setIsError] = useState("");

  const getElement = async (slip_id) => {
    const apiUrl = `https://api.adviceslip.com/advice/${slip_id}`;
    try {
      const res = await axios.get(apiUrl);
      setData(res.data);
    } catch (err) {
      setIsError(err);
    }
  };

  useEffect(() => {
    // Initial fetch
    getElement(currentIndex);

    // Setup interval to fetch every minute
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  // Save currentIndex to localStorage on change
  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex.toString());
  }, [currentIndex]);

    return (
        <div className='conatiner'>
            <div className='quote'>
            {data.slip ? (
              <>
                <div className="quoteNo">
                  Quote #{data.slip.id}
                </div>
                <div className="quotes">
                  "{data.slip.advice}"
                </div>
              </>
            ) : (
              <p>No slip data available</p>
              )}
            </div>
        </div>
    );
}

export default Quote;