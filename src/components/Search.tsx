"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSearch } from "@/hooks/useSearch";
import Image from "next/image";

export default function Search() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const { results = [], isLoading, error } = useSearch(searchVal);

  const handleSelect = (id: number) => {
    setOpen(false);
    setSearchVal("");
    router.push(`/music/${id}`);
  };

  // console.log(results);

  return (
    <div className="relative w-80 sm:w-auto max-w-sm px-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-start text-muted-foreground rounded bg-transparent hover:bg-accent transition-colors"
            onClick={() => setOpen(true)}
          >
            <SearchIcon className="mr-2 h-4 w-4" />
            Search releases and tracks...
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] p-0"
          align="start"
        >
          <Command shouldFilter={false}>
            <CommandInput
              value={searchVal}
              onValueChange={setSearchVal}
              className="border-0"
              placeholder="Type a release or track name..."
            />
            <CommandList>
              {isLoading ? (
                <div className="p-4 text-center">Loading...</div>
              ) : error ? (
                <div className="p-4 text-center text-red-500">
                  Error: {error}
                </div>
              ) : results && results.length > 0 ? (
                <CommandGroup>
                  {results.map((release) => (
                    <CommandItem
                      key={release.id}
                      value={release.title}
                      onSelect={() => handleSelect(release.id)}
                      className="flex items-center gap-2 p-2"
                    >
                      {release.image ? (
                        <div className="relative h-10 w-10 overflow-hidden rounded">
                          <Image
                            src={release.image}
                            alt={release.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-10 w-10 bg-gray-200 rounded" />
                      )}
                      <div className="flex flex-col">
                        <span className="font-medium">{release.title}</span>
                        <span className="text-sm text-muted-foreground">
                          {release.artist}
                        </span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : (
                <CommandEmpty>No results found.</CommandEmpty>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
