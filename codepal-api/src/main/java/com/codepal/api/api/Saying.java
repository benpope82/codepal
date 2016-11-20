//package com.codepal.api.api;
//
//import com.google.common.base.MoreObjects;
//
//import com.fasterxml.jackson.annotation.JsonProperty;
//
//import org.hibernate.validator.constraints.Length;
//
//public class Saying {
//    private long id;
//
//    @Length(max = 3)
//    private String content;
//
//    public Saying() {
//        // Jackson deserialization
//    }
//
//    public Saying(long id, String content) {
//        this.id = id;
//        this.content = content;
//    }
//
//    @JsonProperty
//    public long getId() {
//        return id;
//    }
//
//    @JsonProperty
//    public String getContent() {
//        return content;
//    }
//
//    @Override
//    public String toString() {
//        return MoreObjects.toStringHelper(this)
//                .add("id", id)
//                .add("content", content)
//                .toString();
//    }
//}
