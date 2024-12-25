import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Sidebar from '../components/Sidebar'
import { Modal } from '../components/Modal/Modal'

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-screen" >
      <Sidebar/>
      <Outlet />
      <Modal/>
      <TanStackRouterDevtools />
    </div>
  ),
})