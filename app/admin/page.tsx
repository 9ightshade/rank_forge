
function AdminDashboard({ contributors }) {
    const pendingSubmissions = [
      { 
        id: 1, 
        contributor: "Jordan Williams", 
        type: "Pull Request", 
        title: "Implement dark mode toggle", 
        date: "2025-05-15",
        url: "https://github.com/idan-devs/repo/pull/234"
      },
      { 
        id: 2, 
        contributor: "Taylor Smith", 
        type: "Issue", 
        title: "Report bug in authentication flow", 
        date: "2025-05-14",
        url: "https://github.com/idan-devs/repo/issues/567"
      },
      { 
        id: 3, 
        contributor: "Casey Brown", 
        type: "Pull Request", 
        title: "Fix loading state in dashboard components", 
        date: "2025-05-12",
        url: "https://github.com/idan-devs/repo/pull/890"
      },
    ];
    
    const [activeTab, setActiveTab] = useState('pending');
    const [selectedSubmission, setSelectedSubmission] = useState(null);
    
    const handleScoreSubmission = (submissionId) => {
      // Find the submission to score
      const submission = pendingSubmissions.find(s => s.id === submissionId);
      setSelectedSubmission(submission);
    };
    
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-4 py-3 font-medium ${activeTab === 'pending' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Pending Submissions ({pendingSubmissions.length})
              </button>
              <button
                onClick={() => setActiveTab('contributors')}
                className={`px-4 py-3 font-medium ${activeTab === 'contributors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Manage Contributors
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-4 py-3 font-medium ${activeTab === 'settings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Settings
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'pending' && (
              <div>
                {selectedSubmission ? (
                  <ScoreSubmissionPanel 
                    submission={selectedSubmission} 
                    onBack={() => setSelectedSubmission(null)}
                  />
                ) : (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Pending Submissions</h2>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="py-3 px-4 text-left font-medium text-gray-500">Contributor</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-500">Type</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-500">Title</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-500">Date</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-500">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {pendingSubmissions.map((submission) => (
                          <tr key={submission.id} className="hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{submission.contributor}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                                submission.type === 'Pull Request' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                              }`}>
                                {submission.type}
                              </span>
                            </td>
                            <td className="py-3 px-4">{submission.title}</td>
                            <td className="py-3 px-4 text-gray-500">{submission.date}</td>
                            <td className="py-3 px-4 space-x-2">
                              <button 
                                onClick={() => handleScoreSubmission(submission.id)}
                                className="text-blue-600 hover:underline"
                              >
                                Score
                              </button>
                              <a 
                                href={submission.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                        </table>
                    </div>
                    </div>
                    </div>
                )}  
                </div>
            )}
            {activeTab === 'contributors' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Manage Contributors</h2>
                <ContributorsList contributors={contributors} />
              </div>
            )}
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Settings</h2>
                <p>Settings content goes here.</p>
              </div>
            )}
            </div>
            </div>
        </div>
        </div>
    );
    }
    