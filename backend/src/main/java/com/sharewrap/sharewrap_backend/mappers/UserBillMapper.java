package com.sharewrap.sharewrap_backend.mappers;

import com.sharewrap.sharewrap_backend.dtos.UserBillDto;
import com.sharewrap.sharewrap_backend.models.UserBill;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Named;
import java.util.Base64;
import java.util.List;

@Mapper(componentModel = "spring")
public interface UserBillMapper {

    // Convert UserBillDto to UserBill, with specific mapping for 'receipt'
    @Mapping(source = "receipt", target = "receipt", qualifiedByName = "base64ToBlob")
    UserBill toUserBill(UserBillDto userBillDto);

    // Convert UserBill to UserBillDto, with specific mapping for 'receipt'
    @Mapping(source = "receipt", target = "receipt", qualifiedByName = "blobToBase64")
    UserBillDto toUserBillDto(UserBill userBill);

    List<UserBillDto> toUserBillDtos(List<UserBill> userBills);
    List<UserBill> toUserBills(List<UserBillDto> userBillDtos);


    void updateUserBill(@MappingTarget UserBill target, UserBill source);

    // Base64 to Blob conversion
    @Named("base64ToBlob")
    default byte[] base64ToBlob(String base64String) {
        if (base64String == null || base64String.isEmpty()) {
            return null;
        }
        return Base64.getDecoder().decode(base64String);
    }

    // Blob to Base64 conversion
    @Named("blobToBase64")
    default String blobToBase64(byte[] imageBytes) {
        if (imageBytes == null || imageBytes.length == 0) {
            return null;
        }
        return Base64.getEncoder().encodeToString(imageBytes);
    }
}
