import { toast } from 'sonner'

class AppStore {
  toast = toast
}

export const app = new AppStore()
