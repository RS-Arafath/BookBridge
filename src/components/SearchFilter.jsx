'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search, Check, ChevronDown } from 'lucide-react';
import { Button, Dropdown, Header, Label } from '@heroui/react';
import { useState, useMemo } from 'react';

const SearchFilters = ({ categories }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTitle = searchParams.get('title') || '';
  const currentCategory = searchParams.get('category') || '';

  const [selected, setSelected] = useState(
    new Set(currentCategory ? [currentCategory] : []),
  );

  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSelectionChange = (keys) => {
    setSelected(keys);
    const value = Array.from(keys)[0] || '';
    updateParams('category', value);
  };

  const selectedLabel = useMemo(() => {
    const key = Array.from(selected)[0];
    const match = categories.find((cat) => cat.slug === key);
    return match ? match.name : 'All Categories';
  }, [selected, categories]);

  const CheckIcon = (
    <Check size={16} className="text-[#F7971D]" strokeWidth={2.5} />
  );

  return (
    <div className="mb-10 flex  flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-ful sm:w-sm">
        <Search
          size={18}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-[#1E3A5F]/50"
        />
        <input
          type="text"
          defaultValue={currentTitle}
          onChange={(e) => updateParams('title', e.target.value)}
          placeholder="Search by title..."
          className="w-full rounded-full border border-[#1E3A5F]/20 py-2.5 pr-4 pl-10 text-sm text-[#1E3A5F] outline-none focus:border-[#F7971D] transition-colors"
        />
      </div>

      <Dropdown>
        <Button
          aria-label="Filter by category"
          variant="bordered"
          className="w-full sm:w-1/6 justify-between rounded-full border border-[#1E3A5F]/20 text-[#1E3A5F] hover:border-[#F7971D] bg-white px-4 py-2.5"
        >
          {selectedLabel}
          <ChevronDown size={16} className="text-[#1E3A5F]/50" />
        </Button>
        <Dropdown.Popover className="min-w-[220px]">
          <Dropdown.Menu
            selectedKeys={selected}
            selectionMode="single"
            onSelectionChange={handleSelectionChange}
          >
            <Dropdown.Section>
              <Header>Filter by category</Header>
              <Dropdown.Item id="" textValue="All Categories">
                <Dropdown.ItemIndicator>
                  {({ isSelected }) => (isSelected ? CheckIcon : null)}
                </Dropdown.ItemIndicator>
                <Label>All Categories</Label>
              </Dropdown.Item>
              {categories.map((cat) => (
                <Dropdown.Item key={cat.id} id={cat.slug} textValue={cat.name}>
                  <Dropdown.ItemIndicator>
                    {({ isSelected }) => (isSelected ? CheckIcon : null)}
                  </Dropdown.ItemIndicator>
                  <Label>{cat.name}</Label>
                </Dropdown.Item>
              ))}
            </Dropdown.Section>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default SearchFilters;
