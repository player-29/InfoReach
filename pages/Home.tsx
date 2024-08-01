// src/pages/Home.tsx

import React, { useEffect, useState } from 'react';
import { fetchTechNews } from '../services/techNews';
import { fetchEvents } from '../services/events';

interface NewsItem {
  title: string;
  description: string;
  url: string;
}

interface EventItem {
  name: string;
  date: string;
  location: string;
}

const Home: React.FC = () => {
  const [techNews, setTechNews] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const news = await fetchTechNews();
        const eventsData = await fetchEvents();
        setTechNews(news);
        setEvents(eventsData);
      } catch (err) {
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="home">
      <section className="tech-news">
        <h2>Latest Tech News</h2>
        <ul>
          {techNews.map((news, index) => (
            <li key={index}>
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="events">
        <h2>Upcoming Events</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
