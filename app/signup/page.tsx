import { InputComponenet } from "../components/InputComponent";

export default function SignUpPage() {
	return (
		<main className="flex h-screen flex-col items-center bg-gradient-to-tr from-blue-400 to-sky-500">	
			<div className="mt-40 flex w-full min-w-max max-w-md flex-col items-center rounded-lg bg-white">
				<h1 className="mb-10 mt-14 text-3xl font-bold">Registrar Empresa</h1>

				<InputComponenet placeholder="Nome" />
				<InputComponenet placeholder="E-mail" />
				<InputComponenet placeholder="Senha" />
				<InputComponenet placeholder="Digite novamente sua senha" />

				<button className="mb-4 mt-4 h-11 w-64 rounded-lg bg-gradient-to-tr from-blue-400 to-sky-500 font-bold text-white">
					Registrar	
				</button>
				<a className="text-gray-700 mb-14" href="">
					Criar Conta Demo	
				</a>
			</div>	

			<div>
				<p className="mt-4 text-white">Já tem uma conta? <a className="" href="/signin">Entre com sua conta aqui!</a></p>
			</div>
		</main>
	);
} 
