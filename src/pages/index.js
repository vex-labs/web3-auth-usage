import { useState, useEffect } from "react";
import { useContractInteraction } from "@/hooks/useContractInteraction";

export default function Home() {
  const { getGreeting, setGreeting, isLoggedIn, currentAccountId } =
    useContractInteraction();
  const [newGreeting, setNewGreeting] = useState("");
  const [currentGreeting, setCurrentGreeting] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchGreeting();
  }, []);

  const fetchGreeting = async () => {
    try {
      const result = await getGreeting();
      setCurrentGreeting(result);
    } catch (error) {
      console.error("Error getting greeting:", error);
      setError("Error getting greeting: " + error.message);
    }
  };

  const handleSetGreeting = async () => {
    if (!isLoggedIn) {
      setError("Please connect your wallet first");
      return;
    }

    if (!newGreeting.trim()) {
      setError("Please enter a greeting");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await setGreeting(newGreeting);
      setNewGreeting("");
      await fetchGreeting();
    } catch (error) {
      console.error("Contract call error:", error);
      setError("Error calling contract: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Hello Near</h1>

      {isLoggedIn && currentAccountId && (
        <div className="alert alert-success mt-3">
          Connected Account: {currentAccountId}
        </div>
      )}

      <div className="mt-4">
        <h3>Update Greeting</h3>
        {!isLoggedIn ? (
          <div className="alert alert-warning">
            Please connect your wallet using one of the options in the
            navigation bar
          </div>
        ) : (
          <div className="card p-3">
            {currentGreeting && (
              <div className="mb-3">
                <strong>Current Greeting:</strong> {currentGreeting}
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="greeting" className="form-label">
                New Greeting
              </label>
              <input
                type="text"
                className="form-control"
                id="greeting"
                value={newGreeting}
                onChange={(e) => setNewGreeting(e.target.value)}
                placeholder="Enter new greeting"
                disabled={isLoading}
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <button
              className="btn btn-success"
              onClick={handleSetGreeting}
              disabled={isLoading || !newGreeting.trim()}
            >
              {isLoading ? "Updating..." : "Set New Greeting"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
