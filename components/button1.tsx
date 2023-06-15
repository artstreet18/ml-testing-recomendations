'use client'

import React, { useState, useTransition } from "react";
import { useRouter } from 'next/navigation'
export default function Button1() {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    let node_ids: number[] = [];
    let [data, setData] = useState(node_ids);
    const [showAll, setShowAll] = useState(false);
    const [showCurrent, setShowCurrent] = useState(false);

    const addNodeIds = () => {
        let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

        checkboxes.forEach((item) => {
            node_ids.push(item.id as unknown as number)
            console.log(item.id)
        })

        return node_ids;
    }

    const toggleAll = () => {
        addNodeIds();
        setShowAll(val => !val);
        startTransition(() => {
            router.refresh()
        })
    };

    return (
        <div>
            <div>
                <button className="group mt-10 sm:mt-0 rounded-full flex 
                    space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5
                    text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all" onClick={toggleAll}>
                    {showAll ? "Скрыть рекомендации" : "Показать рекомендации"}</button>
            </div>
            <div className="mt-5">
                {showAll && data.map((el, i) => <p key={`content-${i}`}>{el}</p>)}
            </div>
        </div>
    );
};
