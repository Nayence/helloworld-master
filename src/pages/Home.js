

export default function Home() {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>My All-in-one APP</h1>
      <div style={{
    display: 'flex',
    justifyContent: 'center',
    height: '50vh',
    padding: '20vh'
    }}>
          <a href="/penseBetes" style={{paddingInline: "2vh"}}><button>Penses-bête</button></a><br/>
          <a href="/penseBetes/new" style={{paddingInline: "2vh"}}><button>New Pense-bête</button></a><br/>
          <a href="/consommables" style={{paddingInline: "2vh"}}><button>Consommables</button></a><br/>
          <a href="/consommables/new" style={{paddingInline: "2vh"}}><button>New Consommables</button></a><br/>
          <a href="/rdv/new" style={{paddingInline: "2vh"}}><button>New Rendez-Vous</button></a><br></br>
          <a href="/budget" style={{paddingInline: "2vh"}}><button>Budget</button></a>
        </div>
    </div>
  );
}
