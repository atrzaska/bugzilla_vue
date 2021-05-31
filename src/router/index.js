import { createRouter, createWebHistory } from 'vue-router'
import CommentsEdit from '../views/CommentsEdit.vue'
import CommentsNew from '../views/CommentsNew.vue'
import Confirm from '../views/Confirm.vue'
import Dashboard from '../views/Dashboard.vue'
import Landing from '../views/Landing.vue'
import Signin from '../views/Signin.vue'
import MembersList from '../views/MembersList.vue'
import Privacy from '../views/Privacy.vue'
import ProjectsEdit from '../views/ProjectsEdit.vue'
import ProjectsList from '../views/ProjectsList.vue'
import ProjectsNew from '../views/ProjectsNew.vue'
import Recover from '../views/Recover.vue'
import RecoverSuccess from '../views/RecoverSuccess.vue'
import Signup from '../views/Signup.vue'
import SignupSuccess from '../views/SignupSuccess.vue'
import StoriesCurrent from '../views/StoriesCurrent.vue'
import StoriesEdit from '../views/StoriesEdit.vue'
import StoriesIcebox from '../views/StoriesIcebox.vue'
import StoriesNew from '../views/StoriesNew.vue'
import TasksEdit from '../views/TasksEdit.vue'
import TasksNew from '../views/TasksNew.vue'
import Terms from '../views/Terms.vue'
import UsersSettings from '../views/UsersSettings.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsList,
  },
  {
    path: '/users/settings',
    name: 'UsersSettings',
    component: UsersSettings,
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
    path: '/cofirm',
    name: 'Confirm',
    component: Confirm,
  },
  {
    path: '/projects/:id/current',
    name: 'StoriesCurrent',
    component: StoriesCurrent,
  },
  {
    path: '/projects/:id/icebox',
    name: 'StoriesIcebox',
    component: StoriesIcebox,
  },
  {
    path: '/projects/:id/people',
    name: 'MembersList',
    component: MembersList,
  },
  {
    path: '/projects/:id/stories/new',
    name: 'StoriesNew',
    component: StoriesNew,
  },
  {
    path: '/projects/:id/stories/:storyId/edit',
    name: 'StoriesEdit',
    component: StoriesEdit,
  },
  {
    path: '/comments/new',
    name: 'CommentsNew',
    component: CommentsNew,
  },
  {
    path: '/comments/:id/edit',
    name: 'CommentsEdit',
    component: CommentsEdit,
  },
  {
    path: '/projects/new',
    name: 'ProjectsNew',
    component: ProjectsNew,
  },
  {
    path: '/projects/:id/edit',
    name: 'ProjectsEdit',
    component: ProjectsEdit,
  },
  {
    path: '/tasks/new',
    name: 'TasksNew',
    component: TasksNew,
  },
  {
    path: '/tasks/:id/edit',
    name: 'TasksEdit',
    component: TasksEdit,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
