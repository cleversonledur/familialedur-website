import type { Person } from "@/lib/types";
import { getPersonDisplayInfo } from "@/lib/tree-utils";

interface PersonDetailProps {
  person: Person;
  onClose: () => void;
}

export default function PersonDetail({ person, onClose }: PersonDetailProps) {
  const { birthInfo, deathInfo } = getPersonDisplayInfo(person);

  return (
    <div className="absolute right-4 top-4 z-20 w-80 max-h-[calc(100vh-120px)] overflow-y-auto rounded-xl bg-white shadow-xl border border-stone-200">
      <div className="sticky top-0 flex items-center justify-between bg-white px-4 py-3 border-b border-stone-100">
        <h3 className="text-lg font-bold text-stone-900 truncate pr-2">
          {person.name}
        </h3>
        <button
          onClick={onClose}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 text-stone-500 transition-colors"
          aria-label="Fechar"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
      </div>

      <div className="px-4 py-3 space-y-3">
        {person.bookRef && (
          <div className="text-xs text-stone-400 font-mono">
            Ref: {person.bookRef}
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className={`inline-block w-3 h-3 rounded-full ${
            person.gender === "M"
              ? "bg-blue-400"
              : person.gender === "F"
                ? "bg-rose-400"
                : "bg-stone-400"
          }`} />
          <span className="text-sm text-stone-600">
            {person.gender === "M" ? "Masculino" : person.gender === "F" ? "Feminino" : "Desconhecido"}
          </span>
          <span className="text-xs text-stone-400 ml-auto">
            Geração {person.generation}
          </span>
        </div>

        {birthInfo && (
          <DetailRow label="Nascimento" value={birthInfo} />
        )}

        {deathInfo && (
          <DetailRow label="Falecimento" value={deathInfo} />
        )}

        {(person.burialDate || person.burialPlace) && (
          <DetailRow
            label="Sepultamento"
            value={[person.burialDate, person.burialPlace].filter(Boolean).join(", ")}
          />
        )}

        {person.occupation && (
          <DetailRow label="Ocupação" value={person.occupation} />
        )}

        {person.alsoKnownAs && (
          <DetailRow label="Também conhecido(a)" value={person.alsoKnownAs} />
        )}

        {person.immigrationDate && (
          <DetailRow label="Imigração" value={person.immigrationDate} />
        )}

        {person.residence && (
          <DetailRow label="Residência" value={person.residence} />
        )}

        {person.religion && (
          <DetailRow label="Religião" value={person.religion} />
        )}

        {person.notes && (
          <DetailRow label="Notas" value={person.notes} />
        )}

        {person.spouses.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
              {person.spouses.length === 1 ? "Cônjuge" : "Cônjuges"}
            </p>
            {person.spouses.map((spouse, i) => (
              <div key={i} className="ml-2 mb-2 text-sm text-stone-700">
                <p className="font-medium">{spouse.name}</p>
                {spouse.marriageDate && (
                  <p className="text-xs text-stone-500">
                    Casamento: {spouse.marriageDate}
                    {spouse.marriagePlace ? `, ${spouse.marriagePlace}` : ""}
                  </p>
                )}
                {spouse.birthDate && (
                  <p className="text-xs text-stone-500">
                    Nascimento: {spouse.birthDate}
                  </p>
                )}
                {spouse.deathDate && (
                  <p className="text-xs text-stone-500">
                    Falecimento: {spouse.deathDate}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {person.children.length > 0 && (
          <div className="text-sm text-stone-600">
            <span className="font-medium">{person.children.length}</span>{" "}
            {person.children.length === 1 ? "filho(a)" : "filhos(as)"}
          </div>
        )}

        {person.familySearchId && (
          <a
            href={`https://www.familysearch.org/tree/person/details/${person.familySearchId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100"
          >
            <svg className="h-4 w-4 text-[#0061BD]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            Ver no FamilySearch
          </a>
        )}

        <div className="pt-2 border-t border-stone-100">
          <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">
            {person.source === "both"
              ? "Livro 1 e 2"
              : person.source === "livro1"
                ? "Livro 1"
                : "Livro 2"}
          </span>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
        {label}
      </p>
      <p className="text-sm text-stone-700">{value}</p>
    </div>
  );
}
