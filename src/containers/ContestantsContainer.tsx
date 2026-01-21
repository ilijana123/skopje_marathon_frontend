import { ContestantsTab } from "../components/ContestantsTab";
import { useContestants } from "../hooks/useContestants";

export const ContestantsContainer = () => {
  const c = useContestants();

  return (
    <ContestantsTab
      contestants={c.contestants}
      categories={c.categories}
      searchTerm={c.searchTerm}
      setSearchTerm={c.setSearchTerm}
      filterCategory={c.filterCategory}
      setFilterCategory={c.setFilterCategory}
      loading={c.loading}
    />
  );
};
