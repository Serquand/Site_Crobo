import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminDashboardView from "../views/AdminDashboardView";
import WatchGamesView from "../views/WatchGamesView";
import CreateGameView from "../views/CreateGameView";
import Game from "../views/Game";
import EventView from "../views/EventView";
import ProjectView from "../views/ProjectView";
import RankingView from "../views/RankingView";
import LoginView from "../views/LoginView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }, 
    {
        path: "/admin", 
        name: "Admin dashboard",
        component: AdminDashboardView, 
        meta: { requireAdmin: true }, 
        children: [
            {
                path: "watchGames", 
                name: "Watch games", 
                component: WatchGamesView
            }, 
            {
                path: "createGames", 
                name: "Create games", 
                component: CreateGameView
            },
        ]
    }, 
    {
        path: "/game", 
        name: "Game", 
        component: Game, 
        meta: { requireAuth: true }
    }, 
    {
        path: "/event", 
        name: "Event ", 
        component: EventView, 
    }, 
    {
        path: '/project', 
        name: "Project", 
        component: ProjectView, 
    }, 
    {
        path: "/ranking", 
        name: "Ranking", 
        component: RankingView
    }, 
    {
        path: "/login", 
        name: "Login", 
        component: LoginView
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
  linkActiveClass: "active-class"
})

export default router
