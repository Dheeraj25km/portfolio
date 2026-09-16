import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { ScrollTop } from './components/scroll-top/scroll-top';
import { Education } from './components/education/education';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, About, Experience, Education, Projects, Skills, Contact, Footer, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  scrollTo(id: string, event: Event): void {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
}
