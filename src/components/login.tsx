import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Link } from 'react-router-dom'

export function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-sm border">
        
        <h1 className="text-2xl font-semibold text-center mb-2">
          Iniciar sesión
        </h1>

        <p className="text-sm text-muted-foreground text-center mb-6">
          Accede a tu cuenta
        </p>

        <form className="space-y-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Contraseña" />

          <Button className="w-full">
            Entrar
          </Button>
        </form>

        <p className="text-sm text-center text-muted-foreground mt-6">
          ¿No tienes cuenta?{' '}
          <Link to="/registro" className="font-medium text-primary hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  )
}
