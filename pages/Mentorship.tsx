// HACK2SKILL/pages/Mentorship.tsx

import React, { useEffect, useState } from 'react';
import { fetchMentorships } from '../services/mentorships';

interface Mentorship {
  id: string;
  mentorName: string;
  title: string;
  description: string;
  applicationDeadline: string;
  link: string;
}

const Mentorship: React.FC = () => {
  const [mentorships, setMentorships] = useState<Mentorship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMentorships = async () => {
      try {
        const data = await fetchMentorships();
        setMentorships(data);
      } catch (err) {
        setError('Failed to load mentorship programs.');
      } finally {
        setLoading(false);
      }
    };

    loadMentorships();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mentorship">
      <h1>Mentorship Programs</h1>
      <ul>
        {mentorships.map((mentorship) => (
          <li key={mentorship.id} className="mentorship-item">
            <h2>{mentorship.title}</h2>
            <h3>Mentor: {mentorship.mentorName}</h3>
            <p>{mentorship.description}</p>
            <p>Application Deadline: {mentorship.applicationDeadline}</p>
            <a href={mentorship.link} target="_blank" rel="noopener noreferrer">
              Learn More & Apply
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mentorship;
