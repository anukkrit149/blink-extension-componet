import {React, useState} from "react";
import { data } from "./data";
import "./css/component.css";
import { connect, disconnect, setConnection,  } from 'starknetkit'

export default function BlinkComponent() {
	const [showComponent, setShowComponent] = useState(false);
	const showConnectWallet = () => {
		setShowComponent(true);
	};

	const connectWallet = async() => {
		const { wallet } = await connect();

		if(wallet && wallet.isConnected) {
			console.log("wallet connected")
			// setConnection(wallet)
			// setProvider(wallet.account)
			// setAddress(wallet.selectedAddress)
		}
	}

	return (
		<div className={"blink-container"}>
			{/*{showComponent &&}*/}
			<div className={"blink-header"}>
				<img src={data.image} alt="Realms DAO Platform" />
				<h1>{data.title}</h1>
				<p>{data.description}</p>
			</div>
			<div className={"blink-actions"}>
				{data.links.actions.map((action, index) => (
					<button
						key={index}
						style={{
							backgroundColor: action.color,
							borderColor: action.color,
						}}
						onClick={() => 	actionBtnClick(action)}
					>
						{action.label}
					</button>
				))}
			</div>
		</div>
	);
}

function actionBtnClick(action) {
	console.log("action-"+action.label)
	console.log("action-calldata-"+action.data)
// 	check for wallet connected or not
// 	if not connected then connect wallet
// 	if connected then call starknet with calldata
// 	if success then show success message
// 	if failed then show failed message
	
	console.log("connect wallet rendered")
}


export function SolanaActionComponent() {
	return (
		<div>
			<div className="flex flex-col p-5">
				<div className="mb-2 flex items-center gap-2">
					<a
						href="https://jup.ag/swap/USDC-2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo"
						target="_blank"
						className="inline-flex items-center truncate text-subtext text-twitter-neutral-50 transition-colors hover:cursor-pointer hover:text-[#949CA4] hover:underline motion-reduce:transition-none"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="none"
							viewBox="0 0 16 16"
							preserveAspectRatio="xMidYMid meet"
							className="mr-2"
						>
							<g fill="currentColor" clip-path="url(#a)">
								<path d="M7.409 9.774 9.774 7.41a.836.836 0 1 0-1.183-1.183L6.226 8.592A.836.836 0 1 0 7.41 9.774Z"></path>
								<path d="M10.76.503A4.709 4.709 0 0 0 7.41 1.889L5.83 3.467A.836.836 0 1 0 7.014 4.65L8.59 3.072a3.067 3.067 0 0 1 4.338 4.337L11.35 8.987a.835.835 0 1 0 1.182 1.182l1.578-1.577a4.738 4.738 0 0 0-3.35-8.09ZM5.24 15.497a4.706 4.706 0 0 0 3.351-1.386l1.578-1.577a.836.836 0 1 0-1.182-1.183l-1.578 1.578a3.067 3.067 0 1 1-4.337-4.337L4.65 7.014A.836.836 0 1 0 3.467 5.83L1.889 7.41a4.737 4.737 0 0 0 3.351 8.088Z"></path>
							</g>
							<defs>
								<clipPath id="a">
									<path fill="#fff" d="M0 0h16v16H0z"></path>
								</clipPath>
							</defs>
						</svg>
						jup.ag
					</a>
					<a
						href="https://docs.dialect.to/documentation/actions/security"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center"
					>
						<div className="bg-[#B3B3B31A] text-[#888989] hover:text-[#949CA4] transition-colors motion-reduce:transition-none inline-flex items-center justify-center gap-1 rounded-full text-subtext font-semibold leading-none aspect-square p-1">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="13"
									height="13"
									fill="none"
									viewBox="0 0 16 16"
									preserveAspectRatio="xMidYMid meet"
								>
									<path
										fill="currentColor"
										fill-rule="evenodd"
										d="M13.863 3.42 8.38 1.088a.932.932 0 0 0-.787 0L2.108 3.421c-.641.291-1.137.904-1.108 1.662 0 2.916 1.196 8.195 6.212 10.616.496.233 1.05.233 1.546 0 5.016-2.42 6.212-7.7 6.241-10.616 0-.758-.496-1.37-1.137-1.662Zm-6.33 7.35h-.582a.69.69 0 0 0-.7.7c0 .408.292.7.7.7h2.216c.379 0 .7-.292.7-.7 0-.38-.321-.7-.7-.7h-.234V8.204c0-.38-.32-.7-.7-.7H7.208a.69.69 0 0 0-.7.7c0 .408.292.7.7.7h.326v1.866Zm-.466-5.133c0 .525.408.933.933.933a.94.94 0 0 0 .933-.933A.96.96 0 0 0 8 4.704a.94.94 0 0 0-.933.933Z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
						</div>
					</a>
				</div>
				<span className="mb-0.5 text-text font-semibold text-white">
					Buy PYUSD with USDC
				</span>
				<span className="mb-4 whitespace-pre-wrap text-subtext text-twitter-neutral-40">
					Buy PYUSD with USDC. Choose a USD amount of USDC from the
					options below, or enter a custom amount.
				</span>
				<div className="flex flex-col gap-3">
					<div className="flex flex-wrap items-center gap-2">
						<div className="flex-auto">
							<button className="flex w-full items-center justify-center rounded-full px-6 py-3 text-text font-semibold transition-colors motion-reduce:transition-none bg-twitter-accent hover:bg-twitter-accent-darker text-white">
								$10
							</button>
						</div>
						<div className="flex-auto">
							<button className="flex w-full items-center justify-center rounded-full px-6 py-3 text-text font-semibold transition-colors motion-reduce:transition-none bg-twitter-accent hover:bg-twitter-accent-darker text-white">
								$100
							</button>
						</div>
						<div className="flex-auto">
							<button className="flex w-full items-center justify-center rounded-full px-6 py-3 text-text font-semibold transition-colors motion-reduce:transition-none bg-twitter-accent hover:bg-twitter-accent-darker text-white">
								$1,000
							</button>
						</div>
					</div>
					<div className="flex items-center gap-2 rounded-full border border-[#3D4144] transition-colors focus-within:border-twitter-accent motion-reduce:transition-none">
						<input
							placeholder="Enter a custom USD amount"
							className="ml-4 flex-1 truncate bg-transparent outline-none placeholder:text-twitter-neutral-50 disabled:text-twitter-neutral-50"
							value=""
						/>
						<div className="my-2 mr-2">
							<button
								className="flex w-full items-center justify-center rounded-full px-6 py-3 text-text font-semibold transition-colors motion-reduce:transition-none bg-twitter-neutral-70 text-twitter-neutral-50"
								disabled=""
							>
								Buy PYUSD
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
