import { useEffect, useState } from "react";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface Term {
  /** Unique identifier */
  id: number;
  /** Term name */
  name: string;
  /** Flag indicating whether term has child terms */
  hasChildren: boolean;
  /** Id of a parent term. If there is no parent, no id is set */
  parentId?: number;
}

const terms: Term[] = [
  {
    id: 1,
    name: "Customer",
    hasChildren: false,
  },
  {
    id: 2,
    name: "Department",
    hasChildren: false,
  },
  {
    id: 3,
    name: "Manufacturing",
    hasChildren: true,
  },
  {
    id: 4,
    name: "Work Order",
    hasChildren: false,
    parentId: 3,
  },
  {
    id: 5,
    name: "Manufacturing Location",
    hasChildren: true,
    parentId: 3,
  },
  {
    id: 6,
    name: "Manufacturing Location Capacity",
    hasChildren: false,
    parentId: 5,
  },
  {
    id: 7,
    name: "Manufacturing Location Cost Rate",
    hasChildren: false,
    parentId: 5,
  },
];

/**
 * Returns array of terms filtered by parent
 * If no parentId is set, returns terms without parents (first level of hierarchy)
 * @param parentId
 */
async function fetchTerms(parentId?: number) {
  await delay(2000); // mocking slow backend response
  return terms.filter((term) => term.parentId === parentId);
}


export default function Page() {


  return <div>
    <h5>Business Glossary</h5>
    <TermWrapper />
  </div>

}


function TermWrapper() {
  const [terms, setTerms] = useState<Term[]>([])


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTerms()
      setTerms(response)

    }


    fetchData()
  }, [])



  return <ul>
    {terms.map((t, idx) => {
      return <Term key={idx} term={t} />
    })}
  </ul>
}

type TermProps = {
  term: Term
}


function Term({ term }: TermProps) {
  const [childTerms, setChildTerms] = useState<Term[]>([])


  const {id, name, hasChildren} = term

  useEffect(() => {

    const fetchData = async () => {
      if (hasChildren) {
        const response = await fetchTerms(id)
        setChildTerms(response)
      }
    }


    fetchData()
  }, [id, hasChildren])



  return <li>
    {name}
    <ul>
      {childTerms.map((t, idx) => {
        return <Term key={idx} term={t} />
      })}

    </ul>
  </li>
}
