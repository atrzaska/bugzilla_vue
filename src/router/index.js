import { createRouter, createWebHistory } from 'vue-router'
import CommentsEdit from '@/views/Comments/Edit'
import CommentsNew from '@/views/Comments/New'
import Confirm from '@/views/Auth/Confirm'
import Dashboard from '@/views/Dashboard/Index'
import Help from '@/views/Pages/Help'
import InvitesNew from '@/views/Invites/New'
import Landing from '@/views/Pages/Landing'
import MembersList from '@/views/Members/Index'
import Privacy from '@/views/Pages/Privacy'
import ProjectsEdit from '@/views/Projects/Edit'
import ProjectsList from '@/views/Projects/Index'
import ProjectsNew from '@/views/Projects/New'
import Recover from '@/views/Auth/Recover'
import RecoverSuccess from '@/views/Auth/RecoverSuccess'
import Signin from '@/views/Auth/Signin'
import Signup from '@/views/Auth/Signup'
import SignupSuccess from '@/views/Auth/SignupSuccess'
import StoriesCurrent from '@/views/Stories/Current'
import StoriesEdit from '@/views/Stories/Edit'
import StoriesIcebox from '@/views/Stories/Icebox'
import StoriesNew from '@/views/Stories/New'
import TasksEdit from '@/views/Tasks/Edit'
import TasksNew from '@/views/Tasks/New'
import Terms from '@/views/Pages/Terms'
import UsersSettings from '@/views/User/Settings'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/signup/success',
    name: 'SignupSuccess',
    component: SignupSuccess,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/recover',
    name: 'Recover',
    component: Recover,
  },
  {
    path: '/recover/success',
    name: 'RecoverSuccess',
    component: RecoverSuccess,
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsList,
    meta: { requiresAuth: true },
  },
  {
    path: '/users/settings',
    name: 'UsersSettings',
    component: UsersSettings,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:id/current',
    name: 'StoriesCurrent',
    component: StoriesCurrent,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:id/icebox',
    name: 'StoriesIcebox',
    component: StoriesIcebox,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:id/members',
    name: 'MembersList',
    component: MembersList,
    meta: { requiresAuth: true },
  },
  {
    path: '/invites/new',
    name: 'MembersNew',
    component: InvitesNew,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:id/stories/new',
    name: 'StoriesNew',
    component: StoriesNew,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:id/stories/:storyId/edit',
    name: 'StoriesEdit',
    component: StoriesEdit,
    meta: { requiresAuth: true },
  },
  {
    path: '/comments/new',
    name: 'CommentsNew',
    component: CommentsNew,
    meta: { requiresAuth: true },
  },
  {
    path: '/comments/:id/edit',
    name: 'CommentsEdit',
    component: CommentsEdit,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/new',
    name: 'ProjectsNew',
    component: ProjectsNew,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:id/edit',
    name: 'ProjectsEdit',
    component: ProjectsEdit,
    meta: { requiresAuth: true },
  },
  {
    path: '/tasks/new',
    name: 'TasksNew',
    component: TasksNew,
    meta: { requiresAuth: true },
  },
  {
    path: '/tasks/:id/edit',
    name: 'TasksEdit',
    component: TasksEdit,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((r) => r.meta.requiresAuth)
  const isLoggedOut = localStorage.getItem('authToken') == null

  if (requiresAuth) {
    if (isLoggedOut) {
      next('/signin')
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
