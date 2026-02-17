"use client";

import React from "react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { IconSend2 } from "@tabler/icons-react";

export default function Send() {
  return (
    <div className="w-full border-b border-border px-8 py-4">
      <Field className="flex flex-row">
        <Input
          className="w-[50%]!"
          id="input-url"
          type="text"
          placeholder="https://jsonplaceholder.typicode.com/posts"
        />
        <Select>
          <SelectTrigger className="w-[30%]!">
            <SelectValue placeholder="Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Get">Get</SelectItem>
              <SelectItem value="Post">Post</SelectItem>
              <SelectItem value="Put">Put</SelectItem>
              <SelectItem value="Delete">Delete</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="outline" className="w-[20%]!">
          Send <IconSend2 />
        </Button>
      </Field>
    </div>
  );
}
