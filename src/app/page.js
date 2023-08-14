import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
    <NavBar active={"contas"} />

      <main className="bg-slate-900 p-11 m-10 rounded-lg">
        <h2>Contas</h2>
      </main>
    </>
  )
}
