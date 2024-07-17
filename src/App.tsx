import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./App.css";
import { useAccount, useReadContract } from "wagmi";
import { abi } from "./assets/abis/abi";
import { CONTRACT_ADDRESS } from "./assets/constants";
import { MintNFT } from "./MintNFT";

function App() {
  const { address, isConnected } = useAccount();
  console.log(address);
  const { data, isLoading, refetch } = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName: "balanceOf",
    args: [address],
  });
  return (
    <main className="w-full felx justify-center items-center min-h-svh flex-col">
      <h1 className="text-4xl font-bold text-black">NFT Artist</h1>
      <div>
        {isConnected ? (
          <p></p>
        ) : (
          <div>Please connect your wallet to mint your gift</div>
        )}
        <ConnectButton />
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://bafybeifcr5flcvjqptfoma4zaq2qtd4ca3upbwvtmyia6bhzk2lwxvmxbi.ipfs.dweb.link/galletaok.png"
            alt="Cookie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Fortune Cookie</h2>
          <p>Take one daily</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Mint</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
