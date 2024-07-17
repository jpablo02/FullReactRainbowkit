import * as React from "react";
import { useWriteContract } from "wagmi";
import { abi } from "./assets/abis/abi";
import { Address } from "viem";

export function MintNFT(c: { address: string }) {
  const address = c.address as Address;

  const { data: hash, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const uri = "ipfs://QmawwR2YjAeZ3Kr3qQ2mC1Gj35hHiWD4wsvz5AMHKgGLLr";
    const tokenId = 0;

    console.log("address", address);
    console.log("tokenId", tokenId);
    console.log("uri", uri);

    writeContract({
      address: "0xC54aC8471C12c68D30D758Fa3f659e6769ED52cf",
      abi,
      functionName: "safeMint",
      args: [address, uri],
    });
  }

  return (
    <form onSubmit={submit}>
      <button type="submit">Mint</button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </form>
  );
}
