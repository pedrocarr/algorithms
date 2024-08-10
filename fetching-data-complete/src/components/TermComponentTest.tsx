import { useState, useEffect } from "react";

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

/**
 * Implement a parent-child hierarchy list of term items representing a Business Glossary.
 * - Children items in hierarchy are properly spaced, so user can see the visible hierarchy tree.
 *
 * Use `fetchTerms` function to fetch terms
 *
 * Expected output:
 * - Customer
 * - Department
 * - Manufacturing
 *   - Work order
 *   - Manufacturing Location
 *     - Manufacturing Location Capacity
 *     - Manufacturing Location Cost Rate
 *
 */

export default function TermComponentTest() {
  const [terms, setTerms] = useState<Term[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTerms();
        setTerms(response);
      } catch (e: any) {
        setError(e);
      }

    };

    fetchData();
  }, []);

  if (error) {
    return <div>Something went wrong. Try it again!!!</div>;
  }

  return (
    <div>
      <h1>Business Glossary</h1>
      <ul>
        {terms.map((term) => (
          <TermComponent key={term.id} term={term} />
        ))}
      </ul>
    </div>
  );
}

function TermComponent({ term }: { term: Term }) {
  const [childTerms, setChildTerms] = useState<Term[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchterms = async () => {
      if (term.hasChildren) {
        setIsLoading(true);
        const response = await fetchTerms(term.id);
        setChildTerms(response);
      }
      setIsLoading(false);
    };

    fetchterms();
  }, [term]);

  return (
    <ul>
      {term.name}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        childTerms.length > 0 && (
          <ul>
            {childTerms.map((child) => (
              <TermComponent key={child.id} term={child} />
            ))}
          </ul>
        )
      )}
    </ul>
  );
}
