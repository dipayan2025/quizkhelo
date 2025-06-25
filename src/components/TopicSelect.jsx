// src/components/TopicSelect.jsx
import { Link } from 'react-router-dom';

const topics = [
  { id: 9,   name: 'General Knowledge' },
  { id: 18,  name: 'Computers' },
  { id: 23,  name: 'History' },
  { id: 17,  name: 'Science & Nature' },
];

export default function TopicSelect() {
  return (
    <section className="grid gap-4 p-6">
      {topics.map(t => (
        <Link
          key={t.id}
          to={`/quiz/${t.id}`}
          className="rounded-lg bg-indigo-600 py-4 text-center text-white font-semibold shadow hover:bg-indigo-700"
        >
          {t.name}
        </Link>
      ))}
    </section>
  );
}
