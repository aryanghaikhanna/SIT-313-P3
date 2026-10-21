import React from 'react';
import CardList from './components/CardList';
import Footer from './components/Footer';
import { articles } from './data/articles';
import { tutorials } from './data/tutorials';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <main>
        <CardList
          title="Featured Articles"
          items={articles}
          buttonText="See all articles"
          isTutorial={false}
        />

        <CardList
          title="Featured Tutorials"
          items={tutorials}
          buttonText="See all tutorials"
          isTutorial={true}
        />
      </main>

      <Footer />
    </div>
  );
}