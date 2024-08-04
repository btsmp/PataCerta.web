import { useForm, SubmitHandler } from 'react-hook-form'

export function FormSignUp() {
  const { handleSubmit } = useForm()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          placeholder="email@email.com"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Senha</span>
        </div>
        <input
          type="password"
          placeholder="********"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Repetir a senha</span>
        </div>
        <input
          type="password"
          placeholder="********"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <button className="btn btn-xs sm:btn-sm md:btn-md w-full mt-5 btn-primary">
        Continuar
      </button>
    </form>
  )
}
