import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Link } from 'react-router-dom'

export function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-sm border">

        <h1 className="text-2xl font-semibold text-center mb-2">
          Crear cuenta
        </h1>

        <p className="text-sm text-muted-foreground text-center mb-6">
          Regístrate para continuar
        </p>

        <form className="space-y-4">
          <Input placeholder="Nombre" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Contraseña" />
          <Input type="password" placeholder="Confirmar contraseña" />

          <Button className="w-full">
            Registrarse
          </Button>
        </form>

        <p className="text-sm text-center text-muted-foreground mt-6">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}
